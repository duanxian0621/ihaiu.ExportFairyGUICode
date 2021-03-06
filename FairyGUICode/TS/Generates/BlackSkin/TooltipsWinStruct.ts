/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class TooltipsWinStruct extends fairygui.GLabel
	{
		public m_n1 : fairygui.GGraph;
		public m_title : fairygui.GTextField;

		
		public static URL:string = "ui://s1yj9w6mp7th3b";
		
		public static DependPackages:string[] = ["BlackSkin"];

		
		public static createInstance():TooltipsWin {
			return <TooltipsWin><any>(fairygui.UIPackage.createObject("BlackSkin","TooltipsWin"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n1 = <fairygui.GGraph><any>(this.getChild("n1"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			
			
		}
	}
}