/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TreeItemOpenCheckbox from "../../Extends/GameGM/TreeItemOpenCheckbox";

export default class TreeItemOpenCheckboxStruct extends fgui.GButton
{
	public m_button : fgui.Controller;
	public m_close : fgui.GTextField;
	public m_open : fgui.GTextField;

	
	public static URL:string = "ui://46xcitpdx6how";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TreeItemOpenCheckbox {
		return <TreeItemOpenCheckbox><any>(fgui.UIPackage.createObject("GameGM","TreeItemOpenCheckbox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		
		this.m_button = this.getController("button");

		
		this.m_close = <fgui.GTextField><any>(this.getChild("close"));
		this.m_open = <fgui.GTextField><any>(this.getChild("open"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}