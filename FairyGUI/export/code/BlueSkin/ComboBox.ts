/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class ComboBox extends fairygui.GComboBox {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n5:fairygui.GImage;
		public n2:fairygui.GImage;
		public n3:fairygui.GImage;
		public title:fairygui.GTextField;
		public n6:fairygui.GImage;

		public static URL:string = "ui://stv9j6m6raoc1i";

		public static createInstance():ComboBox {
			return <ComboBox><any>(fairygui.UIPackage.createObject("BlueSkin","ComboBox"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.n6 = <fairygui.GImage><any>(this.getChild("n6"));
		}
	}
}