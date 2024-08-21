namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f3459583-073b-4191-ab8c-0d172073cee1");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("be16fcdc-3ecc-45bc-9530-a500c02bdbba");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,81,107,219,48,16,126,47,244,63,28,102,15,54,4,209,190,46,91,97,201,178,81,40,219,168,157,189,140,61,40,242,197,213,144,37,163,147,211,101,99,255,125,39,203,89,82,167,99,59,12,150,78,223,125,119,223,199,89,217,34,117,82,33,84,232,189,36,183,13,98,233,236,86,55,189,151,65,59,123,121,241,243,242,2,56,122,210,182,129,114,79,1,219,249,105,234,180,176,109,157,253,235,163,71,177,178,65,7,141,244,63,24,177,218,161,13,7,232,151,33,189,31,114,119,154,135,176,232,243,82,61,96,43,63,176,6,120,13,217,154,252,61,74,19,246,89,241,53,21,117,253,198,104,5,202,72,34,72,111,207,208,192,75,88,72,194,103,94,18,203,104,192,9,161,219,241,200,186,70,216,57,93,195,71,91,202,29,11,201,221,230,27,170,0,132,182,70,63,131,68,184,192,45,171,26,104,223,248,134,0,139,35,221,9,115,140,13,79,33,254,176,29,104,176,152,63,133,37,94,240,131,30,22,158,167,68,145,10,38,224,26,149,110,165,129,206,107,21,93,74,85,226,61,134,106,223,97,189,116,166,111,237,103,105,122,124,53,66,111,242,232,228,167,136,95,151,111,179,105,119,189,133,60,145,221,192,245,213,33,138,167,160,137,176,24,40,110,105,41,173,66,131,53,207,17,124,143,243,115,20,5,31,87,130,151,146,100,131,21,182,157,145,33,206,109,241,17,238,156,146,70,255,144,27,131,229,128,203,71,53,107,66,207,91,107,217,125,94,89,113,143,228,122,175,24,228,60,179,204,206,219,196,56,238,75,90,180,108,6,217,89,7,18,131,55,183,84,57,183,208,77,186,101,133,168,220,56,65,180,231,95,50,120,252,148,16,239,156,111,101,200,39,242,184,241,181,184,90,188,56,243,58,70,120,240,238,113,144,191,250,174,176,139,2,15,245,83,248,175,227,117,60,242,143,191,223,242,214,199,245,229,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("d0e215af-74ae-9ca9-dc29-9ea247d06ff1"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("be16fcdc-3ecc-45bc-9530-a500c02bdbba"),
				CreatedInSchemaUId = new Guid("f3459583-073b-4191-ab8c-0d172073cee1"),
				ModifiedInSchemaUId = new Guid("f3459583-073b-4191-ab8c-0d172073cee1")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f3459583-073b-4191-ab8c-0d172073cee1"));
		}

		#endregion

	}

	#endregion

}

