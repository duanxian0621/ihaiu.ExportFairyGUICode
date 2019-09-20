/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EmptyButton from "../../Extends/CommonBase/EmptyButton";
import AlertDialogBackground2 from "../../Extends/SystemModuleDialog/AlertDialogBackground2";

export default class AlertDialogBackground2Struct extends fgui.GComponent
{
	public m_closeBtn : EmptyButton;

	
	public static URL:string = "ui://q5yddivte3wc13";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","_ResImageUIV1"];

	
	public static createInstance():AlertDialogBackground2 {
		return <AlertDialogBackground2><any>(fgui.UIPackage.createObject("SystemModuleDialog","AlertDialogBackground2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_closeBtn = <EmptyButton><any>(this.getChild("closeBtn"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}