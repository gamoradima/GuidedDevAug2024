define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "c1a5a6f1-6c04-47d2-b284-b25be87cdb8c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_zqv2zvo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_zqv2zvo_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalculateAvgPriceProcess",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_55k949r_caption)#",
					"visible": true,
					"icon": "calculator-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateRealtyAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					}
				},
				"parentName": "Button_zqv2zvo",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_gtxz48o_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "bars-button-icon"
				},
				"parentName": "Button_zqv2zvo",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ftsmdxk_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "process-button-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_egr4rj3",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_egr4rj3"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_4rl21pc",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_4rl21pc"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommissionUSD_587l4pg",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommissionUSD_587l4pg",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_k85g7nw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_m9xrp4k",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_m9xrp4k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": "$ComboBox_k85g7nw_ValueDetails"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_5jywrfz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5jywrfz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_k85g7nw",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_2nn9csl",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_2nn9csl",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_687p5v8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_687p5v8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_l3u9on1",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_l3u9on1",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_w9z1nxv",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_w9z1nxv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_tv60kcu",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_tv60kcu",
					"multiline": false,
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Region",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRegion_v717ihf",
					"labelPosition": "auto",
					"control": "$PDS_UsrRegion_v717ihf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_ptjycq5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ptjycq5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Region",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_vffql53",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_vffql53",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_6abzgiq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6abzgiq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_64vvql6",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_64vvql6_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_tscz5xl",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_64vvql6",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_r48ibpn",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_tscz5xl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_7a52nrw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_7a52nrw_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_r48ibpn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_pe14pm9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_pe14pm9_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_n7lewd3DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_r48ibpn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_p8ffxf2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_p8ffxf2_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_r48ibpn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_x1w1rfe",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_x1w1rfe_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ReatlyVisitsGrid"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p8ffxf2",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_e8kjn4n",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_e8kjn4n_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p8ffxf2",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_dzoi2ue",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_dzoi2ue_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_dzoi2ue_GridDetail_n7lewd3",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_n7lewd3"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_dzoi2ue_SearchValue",
							"GridDetailSearchFilter_dzoi2ue_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_r48ibpn",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_rpd052m",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_64vvql6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ReatlyVisitsGrid",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_n7lewd3",
					"activeRow": "$GridDetail_n7lewd3_ActiveRow",
					"selectionState": "$GridDetail_n7lewd3_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_n7lewd3_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_n7lewd3DS_Id",
					"columns": [
						{
							"id": "7ec39674-0996-4a7b-b1ff-3211c01dcab5",
							"code": "GridDetail_n7lewd3DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_n7lewd3DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 178
						},
						{
							"id": "231e5583-ca2b-2acc-321e-87e73a596b5f",
							"code": "GridDetail_n7lewd3DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_n7lewd3DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 169
						},
						{
							"id": "5c8b5e1c-6aa0-d093-6504-e56dc0c51539",
							"code": "GridDetail_n7lewd3DS_UsrComment",
							"caption": "#ResourceString(GridDetail_n7lewd3DS_UsrComment)#",
							"dataValueType": 28,
							"width": 120
						},
						{
							"id": "e1d2ce8d-966b-e3b4-3584-b2f5bc9eae17",
							"code": "GridDetail_n7lewd3DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_n7lewd3DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 123
						},
						{
							"id": "d198e888-e3a4-8897-c855-5827e43eb38f",
							"code": "GridDetail_n7lewd3DS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_n7lewd3DS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_rpd052m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_n7lewd3_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_n7lewd3DS",
							"filters": "$GridDetail_n7lewd3 | crt.ToCollectionFilters : 'GridDetail_n7lewd3' : $GridDetail_n7lewd3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n7lewd3_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "ReatlyVisitsGrid",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_n7lewd3_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_n7lewd3DS",
							"filters": "$GridDetail_n7lewd3 | crt.ToCollectionFilters : 'GridDetail_n7lewd3' : $GridDetail_n7lewd3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n7lewd3_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_n7lewd3_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_n7lewd3_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ReatlyVisitsGrid",
							"filters": "$GridDetail_n7lewd3 | crt.ToCollectionFilters : 'GridDetail_n7lewd3' : $GridDetail_n7lewd3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n7lewd3_SelectionState"
						}
					}
				},
				"parentName": "ReatlyVisitsGrid",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_n7lewd3_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_n7lewd3DS",
							"filters": "$GridDetail_n7lewd3 | crt.ToCollectionFilters : 'GridDetail_n7lewd3' : $GridDetail_n7lewd3_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n7lewd3_SelectionState"
						}
					}
				},
				"parentName": "ReatlyVisitsGrid",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_egr4rj3": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_4rl21pc": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_m9xrp4k": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_2nn9csl": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_l3u9on1": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_w9z1nxv": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_tv60kcu": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"PDS_UsrCommissionUSD_587l4pg": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"PDS_UsrRegion_v717ihf": {
						"modelConfig": {
							"path": "PDS.UsrRegion"
						}
					},
					"PDS_UsrCity_vffql53": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"GridDetail_n7lewd3": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_n7lewd3DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_dzoi2ue_GridDetail_n7lewd3",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_n7lewd3DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_n7lewd3DS.UsrVisitDateTime"
									}
								},
								"GridDetail_n7lewd3DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_n7lewd3DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_n7lewd3DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_n7lewd3DS.UsrComment"
									}
								},
								"GridDetail_n7lewd3DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_n7lewd3DS.CreatedOn"
									}
								},
								"GridDetail_n7lewd3DS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_n7lewd3DS.UsrParentRealty"
									}
								},
								"GridDetail_n7lewd3DS_Id": {
									"modelConfig": {
										"path": "GridDetail_n7lewd3DS.Id"
									}
								}
							}
						}
					},
					"ComboBox_k85g7nw_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrTypeDescription"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_n7lewd3DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								},
								"UsrTypeDescription": {
									"path": "UsrType.Description",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_n7lewd3DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPriceUSD_egr4rj3;
					console.log("Price = " + price);
					request.$context.PDS_UsrArea_4rl21pc = price * 0.5;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
        			    if (request.attributeName === 'PDS_UsrPriceUSD_egr4rj3' || 				    // if price changed
					    request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
						var price = await request.$context.PDS_UsrPriceUSD_egr4rj3;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommissionUSD_587l4pg = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_m9xrp4k;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrOfferType_2nn9csl;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "UsrRealty"
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
        }/**SCHEMA_VALIDATORS*/
	};
});