/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class WindowCloseButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public n3:fairygui.GImage;

		public static URL:string = "ui://s1yj9w6mp7th3g";

		public static createInstance():WindowCloseButton {
			return <WindowCloseButton><any>(fairygui.UIPackage.createObject("BlackSkin","WindowCloseButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.n3 = <fairygui.GImage><any>(this.getChild("n3"));
		}
	}
}