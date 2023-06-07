import * as React from 'react';
import { observer } from 'mobx-react';
import { Icon, IconObject, ObjectName } from 'Component';
import { I, ObjectUtil, translate } from 'Lib';
import { commonStore, detailStore, popupStore } from 'Store';
import Constant from 'json/constant.json';
	
const WidgetSpace = observer(class WidgetSpace extends React.Component<I.WidgetComponent> {

	constructor (props: I.WidgetComponent) {
		super(props);

		this.onOpenSettings = this.onOpenSettings.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onUpload = this.onUpload.bind(this);
	};

	render (): React.ReactNode {
		const space = detailStore.get(Constant.subId.space, commonStore.workspace, []);

		return (
			<div className="body">
				<div className="side left" onClick={this.onOpenSettings}>
					<IconObject 
						id="widget-space-icon" 
						object={{ ...space, layout: I.ObjectLayout.Space }} 
						forceLetter={true} 
						size={40} 
						canEdit={true} 
						onSelect={this.onSelect} 
						onUpload={this.onUpload}
					/>
					<div className="txt">
						<ObjectName object={space} />
						<div className="type">{translate(`spaceType${space.spaceType}`)}</div>
					</div>
				</div>

				<div className="side right">
					<Icon className="settings" tooltip="Settings" onClick={this.onOpenSettings} />
				</div>
			</div>
		);
	};

	onOpenSettings (e: React.MouseEvent) {
		e.stopPropagation();

		popupStore.open('settings', { data: { page: 'spaceIndex', isSpace: true } });
	};

	onSelect (icon: string) {
		ObjectUtil.setIcon(commonStore.workspace, icon, '');
	};

	onUpload (hash: string) {
		ObjectUtil.setIcon(commonStore.workspace, '', hash);
	};

});

export default WidgetSpace;