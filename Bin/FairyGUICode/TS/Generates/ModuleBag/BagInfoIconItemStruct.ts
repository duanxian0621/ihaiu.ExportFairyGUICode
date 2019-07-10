/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemIconItem from "../../Extends/CommonGame/ItemIconItem";
import BlueButtonSmall from "../../Extends/CommonBase/BlueButtonSmall";
import YellowButtonSmall from "../../Extends/CommonBase/YellowButtonSmall";
import BagInfoIconItem from "../../Extends/ModuleBag/BagInfoIconItem";

export default class BagInfoIconItemStruct extends fgui.GComponent
{
	public m_itemName : fgui.GTextField;
	public m_itemContent : fgui.GTextField;
	public m_item : ItemIconItem;
	public m_saleBtn : BlueButtonSmall;
	public m_useBtn : YellowButtonSmall;
	public m_giveBtn : BlueButtonSmall;
	public m_splitBtn : BlueButtonSmall;

	
	public static URL:string = "ui://4mjxxvpqncg96";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame","CommonBase","_ResImageUI"];

	
	public static createInstance():BagInfoIconItem {
		return <BagInfoIconItem><any>(fgui.UIPackage.createObject("ModuleBag","BagInfoIconItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_itemName = <fgui.GTextField><any>(this.getChild("itemName"));
		this.m_itemContent = <fgui.GTextField><any>(this.getChild("itemContent"));
		this.m_item = <ItemIconItem><any>(this.getChild("item"));
		this.m_saleBtn = <BlueButtonSmall><any>(this.getChild("saleBtn"));
		this.m_useBtn = <YellowButtonSmall><any>(this.getChild("useBtn"));
		this.m_giveBtn = <BlueButtonSmall><any>(this.getChild("giveBtn"));
		this.m_splitBtn = <BlueButtonSmall><any>(this.getChild("splitBtn"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}