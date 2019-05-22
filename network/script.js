window.addEventListener("load", function() {

        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        document.querySelector("svg").setAttribute("width", w);
        document.querySelector("svg").setAttribute("height", h);


    var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
    
var radius = 15; 

var nodes_data =  [
        {
            "cluster": 1,
            "id": "CCachedRowSet"
        },
        {
            "cluster": 1,
            "id": "CachedRowSetImpl"
        },
        {
            "cluster": 2,
            "id": "MMeasureCalc"
        },
        {
            "cluster": 2,
            "id": "Query"
        },
        {
            "cluster": 2,
            "id": "X_PA_GoalRestriction"
        },
        {
            "cluster": 2,
            "id": "MGoalRestriction"
        },
        {
            "cluster": 2,
            "id": "X_PA_MeasureCalc"
        },
        {
            "cluster": 3,
            "id": "FTPClient"
        },
        {
            "cluster": 3,
            "id": "FTP"
        },
        {
            "cluster": 3,
            "id": "TelnetClient"
        },
        {
            "cluster": 3,
            "id": "Telnet"
        },
        {
            "cluster": 3,
            "id": "SocketClient"
        },
        {
            "cluster": 3,
            "id": "Configurable"
        },
        {
            "cluster": 3,
            "id": "MMediaServer"
        },
        {
            "cluster": 3,
            "id": "X_CM_Media_Server"
        },
        {
            "cluster": 4,
            "id": "X_A_RegistrationValue"
        },
        {
            "cluster": 4,
            "id": "MRegistrationValue"
        },
        {
            "cluster": 5,
            "id": "MMatchPO"
        },
        {
            "cluster": 5,
            "id": "X_M_MatchPO"
        },
        {
            "cluster": 6,
            "id": "X_AD_PrintFormatItem"
        },
        {
            "cluster": 6,
            "id": "MPrintFormatItem"
        },
        {
            "cluster": 7,
            "id": "X_M_CostUpdateLine"
        },
        {
            "cluster": 7,
            "id": "MCostUpdateLine"
        },
        {
            "cluster": 8,
            "id": "InvoiceNGL"
        },
        {
            "cluster": 8,
            "id": "X_T_InvoiceGL"
        },
        {
            "cluster": 9,
            "id": "X_AD_Field"
        },
        {
            "cluster": 9,
            "id": "MField"
        },
        {
            "cluster": 10,
            "id": "X_AD_Task"
        },
        {
            "cluster": 10,
            "id": "MTask"
        },
        {
            "cluster": 10,
            "id": "Task"
        },
        {
            "cluster": 11,
            "id": "DocWorkflowManager"
        },
        {
            "cluster": 11,
            "id": "DocWorkflowMgr"
        },
        {
            "cluster": 12,
            "id": "MCash"
        },
        {
            "cluster": 12,
            "id": "MCashBook"
        },
        {
            "cluster": 12,
            "id": "X_C_CashBook"
        },
        {
            "cluster": 12,
            "id": "X_C_Cash"
        },
        {
            "cluster": 13,
            "id": "MMovementConfirm"
        },
        {
            "cluster": 13,
            "id": "X_M_MovementLineConfirm"
        },
        {
            "cluster": 13,
            "id": "MMovementLineConfirm"
        },
        {
            "cluster": 13,
            "id": "X_M_MovementConfirm"
        },
        {
            "cluster": 14,
            "id": "MPOS"
        },
        {
            "cluster": 14,
            "id": "X_C_POS"
        },
        {
            "cluster": 15,
            "id": "X_AD_TreeNode"
        },
        {
            "cluster": 15,
            "id": "MTreeNode"
        },
        {
            "cluster": 16,
            "id": "MMovement"
        },
        {
            "cluster": 16,
            "id": "X_M_MovementLineMA"
        },
        {
            "cluster": 16,
            "id": "MMovementLineMA"
        },
        {
            "cluster": 16,
            "id": "X_M_MovementLine"
        },
        {
            "cluster": 16,
            "id": "MMovementLine"
        },
        {
            "cluster": 16,
            "id": "X_M_Movement"
        },
        {
            "cluster": 17,
            "id": "WebDoc"
        },
        {
            "cluster": 17,
            "id": "head"
        },
        {
            "cluster": 17,
            "id": "td"
        },
        {
            "cluster": 18,
            "id": "X_AD_ComponentUse"
        },
        {
            "cluster": 18,
            "id": "MComponentUse"
        },
        {
            "cluster": 19,
            "id": "X_C_AcctSchema_Element"
        },
        {
            "cluster": 19,
            "id": "MAcctSchemaElement"
        },
        {
            "cluster": 20,
            "id": "X_PA_Achievement"
        },
        {
            "cluster": 20,
            "id": "MAchievement"
        },
        {
            "cluster": 21,
            "id": "MTemplate"
        },
        {
            "cluster": 21,
            "id": "X_CM_Template"
        },
        {
            "cluster": 22,
            "id": "MContactInterest"
        },
        {
            "cluster": 22,
            "id": "MInterestArea"
        },
        {
            "cluster": 22,
            "id": "X_R_InterestArea"
        },
        {
            "cluster": 22,
            "id": "X_R_Source"
        },
        {
            "cluster": 22,
            "id": "MSource"
        },
        {
            "cluster": 22,
            "id": "X_R_ContactInterest"
        },
        {
            "cluster": 23,
            "id": "MInfoWindow"
        },
        {
            "cluster": 23,
            "id": "X_AD_InfoWindow"
        },
        {
            "cluster": 24,
            "id": "MRequestProcessor"
        },
        {
            "cluster": 24,
            "id": "X_R_RequestProcessor"
        },
        {
            "cluster": 25,
            "id": "MDistributionList"
        },
        {
            "cluster": 25,
            "id": "X_M_DistributionList"
        },
        {
            "cluster": 26,
            "id": "X_AD_PInstance"
        },
        {
            "cluster": 26,
            "id": "MPInstance"
        },
        {
            "cluster": 27,
            "id": "ImportOrder"
        },
        {
            "cluster": 27,
            "id": "X_I_Order"
        },
        {
            "cluster": 28,
            "id": "X_W_CounterCount"
        },
        {
            "cluster": 28,
            "id": "MCounterCount"
        },
        {
            "cluster": 29,
            "id": "X_M_AttributeUse"
        },
        {
            "cluster": 29,
            "id": "MAttributeUse"
        },
        {
            "cluster": 30,
            "id": "UIFieldVO"
        },
        {
            "cluster": 30,
            "id": "VO"
        },
        {
            "cluster": 31,
            "id": "X_A_RegistrationAttribute"
        },
        {
            "cluster": 31,
            "id": "MRegistrationAttribute"
        },
        {
            "cluster": 32,
            "id": "X_M_Product_Costing"
        },
        {
            "cluster": 32,
            "id": "MProductCosting"
        },
        {
            "cluster": 33,
            "id": "X_C_PaymentBatch"
        },
        {
            "cluster": 33,
            "id": "MPaymentBatch"
        },
        {
            "cluster": 34,
            "id": "X_M_DistributionListLine"
        },
        {
            "cluster": 34,
            "id": "MDistributionListLine"
        },
        {
            "cluster": 34,
            "id": "DistributionCreate"
        },
        {
            "cluster": 35,
            "id": "MAcctProcessor"
        },
        {
            "cluster": 35,
            "id": "CompiereProcessor"
        },
        {
            "cluster": 35,
            "id": "X_C_AcctProcessor"
        },
        {
            "cluster": 36,
            "id": "X_GL_Category"
        },
        {
            "cluster": 36,
            "id": "MGLCategory"
        },
        {
            "cluster": 37,
            "id": "X_S_ResourceUnAvailable"
        },
        {
            "cluster": 37,
            "id": "MResourceUnAvailable"
        },
        {
            "cluster": 38,
            "id": "X_M_ProductPrice"
        },
        {
            "cluster": 38,
            "id": "MProductPrice"
        },
        {
            "cluster": 39,
            "id": "MReportColumn"
        },
        {
            "cluster": 39,
            "id": "X_PA_ReportColumn"
        },
        {
            "cluster": 40,
            "id": "MRecurringRun"
        },
        {
            "cluster": 40,
            "id": "X_C_Recurring_Run"
        },
        {
            "cluster": 41,
            "id": "MCommission"
        },
        {
            "cluster": 41,
            "id": "X_C_Commission"
        },
        {
            "cluster": 41,
            "id": "CommissionCalc"
        },
        {
            "cluster": 41,
            "id": "X_C_CommissionLine"
        },
        {
            "cluster": 41,
            "id": "MCommissionLine"
        },
        {
            "cluster": 42,
            "id": "X_C_RfQ_Topic"
        },
        {
            "cluster": 42,
            "id": "MRfQTopic"
        },
        {
            "cluster": 43,
            "id": "body"
        },
        {
            "cluster": 43,
            "id": "PageEvents"
        },
        {
            "cluster": 44,
            "id": "MOrder"
        },
        {
            "cluster": 44,
            "id": "X_C_DocType"
        },
        {
            "cluster": 44,
            "id": "MDocType"
        },
        {
            "cluster": 44,
            "id": "X_C_Order"
        },
        {
            "cluster": 44,
            "id": "OrderPOCreate"
        },
        {
            "cluster": 45,
            "id": "X_K_IndexLog"
        },
        {
            "cluster": 45,
            "id": "MIndexLog"
        },
        {
            "cluster": 46,
            "id": "MOrderLine"
        },
        {
            "cluster": 46,
            "id": "ChangeVO"
        },
        {
            "cluster": 46,
            "id": "CLogger"
        },
        {
            "cluster": 46,
            "id": "OFX1ToXML"
        },
        {
            "cluster": 46,
            "id": "CompiereLogger"
        },
        {
            "cluster": 46,
            "id": "ResponseVO"
        },
        {
            "cluster": 46,
            "id": "X_C_OrderLine"
        },
        {
            "cluster": 46,
            "id": "InOutGenerate"
        },
        {
            "cluster": 47,
            "id": "MDunningRunEntry"
        },
        {
            "cluster": 47,
            "id": "X_C_DunningRunEntry"
        },
        {
            "cluster": 48,
            "id": "MOrderTax"
        },
        {
            "cluster": 48,
            "id": "X_C_OrderTax"
        },
        {
            "cluster": 49,
            "id": "MAttribute"
        },
        {
            "cluster": 49,
            "id": "X_M_AttributeValue"
        },
        {
            "cluster": 49,
            "id": "MAttributeValue"
        },
        {
            "cluster": 49,
            "id": "MAttributeInstance"
        },
        {
            "cluster": 49,
            "id": "X_M_AttributeInstance"
        },
        {
            "cluster": 49,
            "id": "X_M_Attribute"
        },
        {
            "cluster": 50,
            "id": "DeliveryAccuracy"
        },
        {
            "cluster": 50,
            "id": "SLACriteria"
        },
        {
            "cluster": 50,
            "id": "X_PA_SLA_Measure"
        },
        {
            "cluster": 50,
            "id": "MSLAMeasure"
        },
        {
            "cluster": 50,
            "id": "X_PA_SLA_Goal"
        },
        {
            "cluster": 50,
            "id": "SLAGoalProcess"
        },
        {
            "cluster": 50,
            "id": "MSLAGoal"
        },
        {
            "cluster": 51,
            "id": "X_AD_TreeNodePR"
        },
        {
            "cluster": 51,
            "id": "MTreeNodePR"
        },
        {
            "cluster": 52,
            "id": "MouseEvents"
        },
        {
            "cluster": 52,
            "id": "i"
        },
        {
            "cluster": 52,
            "id": "link"
        },
        {
            "cluster": 52,
            "id": "b"
        },
        {
            "cluster": 52,
            "id": "label"
        },
        {
            "cluster": 52,
            "id": "a"
        },
        {
            "cluster": 52,
            "id": "KeyEvents"
        },
        {
            "cluster": 52,
            "id": "h2"
        },
        {
            "cluster": 52,
            "id": "h1"
        },
        {
            "cluster": 52,
            "id": "FocusEvents"
        },
        {
            "cluster": 52,
            "id": "MultiPartElement"
        },
        {
            "cluster": 52,
            "id": "comment"
        },
        {
            "cluster": 52,
            "id": "script"
        },
        {
            "cluster": 53,
            "id": "MDataMigrationEntry"
        },
        {
            "cluster": 53,
            "id": "X_AD_DataMigrationEntry"
        },
        {
            "cluster": 54,
            "id": "ResultTableCellEditor"
        },
        {
            "cluster": 54,
            "id": "RColumn"
        },
        {
            "cluster": 54,
            "id": "MLookupFactory"
        },
        {
            "cluster": 54,
            "id": "RModelData"
        },
        {
            "cluster": 54,
            "id": "RModel"
        },
        {
            "cluster": 54,
            "id": "ResultTableCellRenderer"
        },
        {
            "cluster": 54,
            "id": "ResultTableModel"
        },
        {
            "cluster": 55,
            "id": "X_AD_Sequence"
        },
        {
            "cluster": 55,
            "id": "MSequence"
        },
        {
            "cluster": 56,
            "id": "X_R_StandardResponse"
        },
        {
            "cluster": 56,
            "id": "MStandardResponse"
        },
        {
            "cluster": 57,
            "id": "X_AD_Val_Rule"
        },
        {
            "cluster": 57,
            "id": "MValRule"
        },
        {
            "cluster": 58,
            "id": "MCost"
        },
        {
            "cluster": 58,
            "id": "X_M_CostElement"
        },
        {
            "cluster": 58,
            "id": "MAcctSchema"
        },
        {
            "cluster": 58,
            "id": "X_M_Product_Category_Acct"
        },
        {
            "cluster": 58,
            "id": "MProductCategoryAcct"
        },
        {
            "cluster": 58,
            "id": "X_C_AcctSchema"
        },
        {
            "cluster": 58,
            "id": "X_M_Cost"
        },
        {
            "cluster": 58,
            "id": "MCostDetail"
        },
        {
            "cluster": 58,
            "id": "X_AD_Client"
        },
        {
            "cluster": 58,
            "id": "MCostElement"
        },
        {
            "cluster": 58,
            "id": "X_M_CostDetail"
        },
        {
            "cluster": 59,
            "id": "X_AD_Form"
        },
        {
            "cluster": 59,
            "id": "MForm"
        },
        {
            "cluster": 60,
            "id": "MBPartnerInfo"
        },
        {
            "cluster": 60,
            "id": "X_RV_BPartner"
        },
        {
            "cluster": 61,
            "id": "WebUser"
        },
        {
            "cluster": 61,
            "id": "MLocation"
        },
        {
            "cluster": 61,
            "id": "MUser"
        },
        {
            "cluster": 61,
            "id": "X_C_BPartner"
        },
        {
            "cluster": 61,
            "id": "MBPartner"
        },
        {
            "cluster": 61,
            "id": "Util"
        },
        {
            "cluster": 61,
            "id": "MDocAction"
        },
        {
            "cluster": 61,
            "id": "MDocActionRule"
        },
        {
            "cluster": 61,
            "id": "X_C_BP_Group"
        },
        {
            "cluster": 61,
            "id": "MBPGroup"
        },
        {
            "cluster": 61,
            "id": "X_AD_User"
        },
        {
            "cluster": 61,
            "id": "WebLogin"
        },
        {
            "cluster": 62,
            "id": "X_CM_AccessProfile"
        },
        {
            "cluster": 62,
            "id": "MAccessProfile"
        },
        {
            "cluster": 63,
            "id": "MYear"
        },
        {
            "cluster": 63,
            "id": "X_C_Year"
        },
        {
            "cluster": 64,
            "id": "MJournalBatch"
        },
        {
            "cluster": 64,
            "id": "X_GL_JournalBatch"
        },
        {
            "cluster": 65,
            "id": "MMedia"
        },
        {
            "cluster": 65,
            "id": "X_CM_Media"
        },
        {
            "cluster": 66,
            "id": "BankStatementMatcher"
        },
        {
            "cluster": 66,
            "id": "MBankStatementMatcher"
        },
        {
            "cluster": 66,
            "id": "X_C_BankStatementMatcher"
        },
        {
            "cluster": 66,
            "id": "BankStatementMatchInfo"
        },
        {
            "cluster": 67,
            "id": "X_C_TaxPostal"
        },
        {
            "cluster": 67,
            "id": "MTaxPostal"
        },
        {
            "cluster": 68,
            "id": "MAdvertisement"
        },
        {
            "cluster": 68,
            "id": "MClickCount"
        },
        {
            "cluster": 68,
            "id": "X_W_ClickCount"
        },
        {
            "cluster": 68,
            "id": "X_W_Advertisement"
        },
        {
            "cluster": 69,
            "id": "MPaymentAllocate"
        },
        {
            "cluster": 69,
            "id": "X_C_PaymentAllocate"
        },
        {
            "cluster": 70,
            "id": "FinStatement"
        },
        {
            "cluster": 70,
            "id": "MElementValue"
        },
        {
            "cluster": 70,
            "id": "X_C_ElementValue"
        },
        {
            "cluster": 70,
            "id": "MReportTree"
        },
        {
            "cluster": 71,
            "id": "WebProjectDeploy"
        },
        {
            "cluster": 71,
            "id": "CacheHandler"
        },
        {
            "cluster": 72,
            "id": "X_C_AcctSchema_GL"
        },
        {
            "cluster": 72,
            "id": "MAcctSchemaGL"
        },
        {
            "cluster": 73,
            "id": "X_AD_TreeNodeCMM"
        },
        {
            "cluster": 73,
            "id": "MTreeNodeCMM"
        },
        {
            "cluster": 74,
            "id": "MBOMProduct"
        },
        {
            "cluster": 74,
            "id": "X_M_BOMProduct"
        },
        {
            "cluster": 75,
            "id": "ChangeLogProcess"
        },
        {
            "cluster": 75,
            "id": "MChangeLog"
        },
        {
            "cluster": 75,
            "id": "X_AD_Column"
        },
        {
            "cluster": 75,
            "id": "TableCreateColumns"
        },
        {
            "cluster": 75,
            "id": "X_AD_Element"
        },
        {
            "cluster": 75,
            "id": "M_Element"
        },
        {
            "cluster": 75,
            "id": "X_AD_Table"
        },
        {
            "cluster": 75,
            "id": "X_AD_ChangeLog"
        },
        {
            "cluster": 76,
            "id": "MUOMConversion"
        },
        {
            "cluster": 76,
            "id": "X_C_UOM_Conversion"
        },
        {
            "cluster": 76,
            "id": "MUOM"
        },
        {
            "cluster": 76,
            "id": "X_C_UOM"
        },
        {
            "cluster": 77,
            "id": "MLoginMsg"
        },
        {
            "cluster": 77,
            "id": "LoginMsgInterface"
        },
        {
            "cluster": 77,
            "id": "X_AD_LoginMsg"
        },
        {
            "cluster": 78,
            "id": "SinglePartElement"
        },
        {
            "cluster": 78,
            "id": "hr"
        },
        {
            "cluster": 78,
            "id": "img"
        },
        {
            "cluster": 78,
            "id": "br"
        },
        {
            "cluster": 79,
            "id": "X_T_ImpFormat"
        },
        {
            "cluster": 79,
            "id": "MTImpFormat"
        },
        {
            "cluster": 80,
            "id": "MRecurring"
        },
        {
            "cluster": 80,
            "id": "X_C_Recurring"
        },
        {
            "cluster": 81,
            "id": "X_AD_UserPreference"
        },
        {
            "cluster": 81,
            "id": "MUserPreference"
        },
        {
            "cluster": 82,
            "id": "X_A_Asset_Group"
        },
        {
            "cluster": 82,
            "id": "MAssetGroup"
        },
        {
            "cluster": 83,
            "id": "MMatchInv"
        },
        {
            "cluster": 83,
            "id": "X_M_MatchInv"
        },
        {
            "cluster": 84,
            "id": "X_C_TaxDeclaration"
        },
        {
            "cluster": 84,
            "id": "MTaxDeclaration"
        },
        {
            "cluster": 85,
            "id": "MBankStatement"
        },
        {
            "cluster": 85,
            "id": "X_C_BankAccount"
        },
        {
            "cluster": 85,
            "id": "MBankAccount"
        },
        {
            "cluster": 85,
            "id": "X_C_BankStatement"
        },
        {
            "cluster": 86,
            "id": "X_C_POSKey"
        },
        {
            "cluster": 86,
            "id": "MPOSKey"
        },
        {
            "cluster": 87,
            "id": "X_C_RfQResponse"
        },
        {
            "cluster": 87,
            "id": "RfQResponseRank"
        },
        {
            "cluster": 87,
            "id": "MRfQResponse"
        },
        {
            "cluster": 88,
            "id": "MRfQLineQty"
        },
        {
            "cluster": 88,
            "id": "X_C_RfQLineQty"
        },
        {
            "cluster": 89,
            "id": "GridWindow"
        },
        {
            "cluster": 89,
            "id": "th"
        },
        {
            "cluster": 89,
            "id": "GridWorkbench"
        },
        {
            "cluster": 89,
            "id": "p"
        },
        {
            "cluster": 89,
            "id": "MChat"
        },
        {
            "cluster": 89,
            "id": "X_CM_Chat"
        },
        {
            "cluster": 90,
            "id": "MDataMigration"
        },
        {
            "cluster": 90,
            "id": "X_AD_DataMigration"
        },
        {
            "cluster": 91,
            "id": "ImportInventory"
        },
        {
            "cluster": 91,
            "id": "X_I_Inventory"
        },
        {
            "cluster": 92,
            "id": "X_AD_TreeNodeMM"
        },
        {
            "cluster": 92,
            "id": "MTreeNodeMM"
        },
        {
            "cluster": 93,
            "id": "ComponentProduct"
        },
        {
            "cluster": 93,
            "id": "X_M_Product_PO"
        },
        {
            "cluster": 93,
            "id": "MProductPO"
        },
        {
            "cluster": 93,
            "id": "X_AD_ComponentReg"
        },
        {
            "cluster": 93,
            "id": "MComponentRegUpdate"
        },
        {
            "cluster": 93,
            "id": "X_AD_ComponentRegUpdate"
        },
        {
            "cluster": 93,
            "id": "MComponentReg"
        },
        {
            "cluster": 94,
            "id": "ReplicationLocal"
        },
        {
            "cluster": 94,
            "id": "ProcessInfoLog"
        },
        {
            "cluster": 94,
            "id": "MReplicationRun"
        },
        {
            "cluster": 94,
            "id": "X_AD_Replication_Run"
        },
        {
            "cluster": 94,
            "id": "X_AD_Replication_Log"
        },
        {
            "cluster": 94,
            "id": "MReplicationLog"
        },
        {
            "cluster": 94,
            "id": "Server"
        },
        {
            "cluster": 94,
            "id": "X_AD_Replication"
        },
        {
            "cluster": 94,
            "id": "MReplication"
        },
        {
            "cluster": 94,
            "id": "ProcessInfo"
        },
        {
            "cluster": 94,
            "id": "ReplicationRemote"
        },
        {
            "cluster": 95,
            "id": "ImportAccount"
        },
        {
            "cluster": 95,
            "id": "X_I_ElementValue"
        },
        {
            "cluster": 96,
            "id": "X_AD_User_Roles"
        },
        {
            "cluster": 96,
            "id": "MUserRoles"
        },
        {
            "cluster": 97,
            "id": "MCommissionDetail"
        },
        {
            "cluster": 97,
            "id": "X_C_CommissionDetail"
        },
        {
            "cluster": 98,
            "id": "X_AD_Tab"
        },
        {
            "cluster": 98,
            "id": "MTab"
        },
        {
            "cluster": 99,
            "id": "X_C_Charge"
        },
        {
            "cluster": 99,
            "id": "MCharge"
        },
        {
            "cluster": 100,
            "id": "Lookup"
        },
        {
            "cluster": 100,
            "id": "MAccountLookup"
        },
        {
            "cluster": 100,
            "id": "MLookup"
        },
        {
            "cluster": 100,
            "id": "MPAttributeLookup"
        },
        {
            "cluster": 100,
            "id": "MLocationLookup"
        },
        {
            "cluster": 100,
            "id": "GridField"
        },
        {
            "cluster": 100,
            "id": "Evaluator"
        },
        {
            "cluster": 100,
            "id": "GridFieldVO"
        },
        {
            "cluster": 100,
            "id": "FieldVO"
        },
        {
            "cluster": 100,
            "id": "FieldType"
        },
        {
            "cluster": 101,
            "id": "X_AD_LoginMsgLog"
        },
        {
            "cluster": 101,
            "id": "MLoginMsgLog"
        },
        {
            "cluster": 102,
            "id": "MNewsChannel"
        },
        {
            "cluster": 102,
            "id": "X_CM_NewsChannel"
        },
        {
            "cluster": 103,
            "id": "MProduct"
        },
        {
            "cluster": 103,
            "id": "ProductCost"
        },
        {
            "cluster": 103,
            "id": "X_M_Product_Category"
        },
        {
            "cluster": 103,
            "id": "MProductCategory"
        },
        {
            "cluster": 103,
            "id": "X_S_ResourceType"
        },
        {
            "cluster": 103,
            "id": "MResourceType"
        },
        {
            "cluster": 103,
            "id": "X_S_Resource"
        },
        {
            "cluster": 103,
            "id": "MResource"
        },
        {
            "cluster": 103,
            "id": "X_S_ExpenseType"
        },
        {
            "cluster": 103,
            "id": "MExpenseType"
        },
        {
            "cluster": 103,
            "id": "X_M_Product"
        },
        {
            "cluster": 103,
            "id": "BOMValidate"
        },
        {
            "cluster": 104,
            "id": "MProjectType"
        },
        {
            "cluster": 104,
            "id": "X_C_ProjectType"
        },
        {
            "cluster": 105,
            "id": "X_C_DocBaseType"
        },
        {
            "cluster": 105,
            "id": "MDocBaseType"
        },
        {
            "cluster": 106,
            "id": "X_AD_Menu"
        },
        {
            "cluster": 106,
            "id": "MMenu"
        },
        {
            "cluster": 107,
            "id": "VolumeTest"
        },
        {
            "cluster": 107,
            "id": "Ini"
        },
        {
            "cluster": 108,
            "id": "MAssetDelivery"
        },
        {
            "cluster": 108,
            "id": "X_A_Asset_Delivery"
        },
        {
            "cluster": 109,
            "id": "MWorkflowProcessor"
        },
        {
            "cluster": 109,
            "id": "X_AD_WorkflowProcessor"
        },
        {
            "cluster": 110,
            "id": "HttpMethodBase"
        },
        {
            "cluster": 110,
            "id": "EntityTypeRegister"
        },
        {
            "cluster": 110,
            "id": "X_AD_EntityType"
        },
        {
            "cluster": 110,
            "id": "MEntityType"
        },
        {
            "cluster": 110,
            "id": "ExpectContinueMethod"
        },
        {
            "cluster": 110,
            "id": "EntityEnclosingMethod"
        },
        {
            "cluster": 110,
            "id": "PostMethod"
        },
        {
            "cluster": 110,
            "id": "HttpMethod"
        },
        {
            "cluster": 111,
            "id": "MRfQResponseLineQty"
        },
        {
            "cluster": 111,
            "id": "RfQCreatePO"
        },
        {
            "cluster": 111,
            "id": "X_C_RfQResponseLineQty"
        },
        {
            "cluster": 112,
            "id": "MRequestAction"
        },
        {
            "cluster": 112,
            "id": "X_R_RequestAction"
        },
        {
            "cluster": 113,
            "id": "MInventory"
        },
        {
            "cluster": 113,
            "id": "X_M_Transaction"
        },
        {
            "cluster": 113,
            "id": "MTransaction"
        },
        {
            "cluster": 113,
            "id": "X_M_InventoryLineMA"
        },
        {
            "cluster": 113,
            "id": "MInventoryLineMA"
        },
        {
            "cluster": 113,
            "id": "X_M_InventoryLine"
        },
        {
            "cluster": 113,
            "id": "MInventoryLine"
        },
        {
            "cluster": 113,
            "id": "InventoryCountCreate"
        },
        {
            "cluster": 113,
            "id": "X_M_Inventory"
        },
        {
            "cluster": 114,
            "id": "MStorage"
        },
        {
            "cluster": 114,
            "id": "MWarehouse"
        },
        {
            "cluster": 114,
            "id": "X_M_Storage"
        },
        {
            "cluster": 114,
            "id": "StorageCleanup"
        },
        {
            "cluster": 115,
            "id": "MWorkflow"
        },
        {
            "cluster": 115,
            "id": "X_AD_WF_NodeNext"
        },
        {
            "cluster": 115,
            "id": "MWFNodeNext"
        },
        {
            "cluster": 115,
            "id": "MWFNextCondition"
        },
        {
            "cluster": 115,
            "id": "X_AD_WF_NextCondition"
        },
        {
            "cluster": 115,
            "id": "X_AD_WF_Node"
        },
        {
            "cluster": 115,
            "id": "MWFNode"
        },
        {
            "cluster": 115,
            "id": "TranslationTable"
        },
        {
            "cluster": 115,
            "id": "X_AD_Workflow"
        },
        {
            "cluster": 116,
            "id": "MPaySelectionCheck"
        },
        {
            "cluster": 116,
            "id": "X_C_PaySelection"
        },
        {
            "cluster": 116,
            "id": "MPaySelection"
        },
        {
            "cluster": 116,
            "id": "X_C_PaySelectionLine"
        },
        {
            "cluster": 116,
            "id": "PaySelectionCreateCheck"
        },
        {
            "cluster": 116,
            "id": "MPaySelectionLine"
        },
        {
            "cluster": 116,
            "id": "X_C_PaySelectionCheck"
        },
        {
            "cluster": 117,
            "id": "MSLACriteria"
        },
        {
            "cluster": 117,
            "id": "X_PA_SLA_Criteria"
        },
        {
            "cluster": 118,
            "id": "X_C_AcctSchema_Default"
        },
        {
            "cluster": 118,
            "id": "MAcctSchemaDefault"
        },
        {
            "cluster": 118,
            "id": "AcctSchemaDefaultCopy"
        },
        {
            "cluster": 119,
            "id": "MDataMigrationPreview"
        },
        {
            "cluster": 119,
            "id": "X_AD_DataMigrationPreview"
        },
        {
            "cluster": 120,
            "id": "MRfQResponseLine"
        },
        {
            "cluster": 120,
            "id": "X_C_RfQResponseLine"
        },
        {
            "cluster": 121,
            "id": "X_AD_UserQuery"
        },
        {
            "cluster": 121,
            "id": "MUserQuery"
        },
        {
            "cluster": 122,
            "id": "MLdapProcessor"
        },
        {
            "cluster": 122,
            "id": "X_AD_LdapAccess"
        },
        {
            "cluster": 122,
            "id": "MLdapAccess"
        },
        {
            "cluster": 122,
            "id": "X_AD_LdapProcessor"
        },
        {
            "cluster": 122,
            "id": "MLdapUser"
        },
        {
            "cluster": 123,
            "id": "LanguageMaintenance"
        },
        {
            "cluster": 123,
            "id": "X_AD_Language"
        },
        {
            "cluster": 123,
            "id": "MLanguage"
        },
        {
            "cluster": 124,
            "id": "MAsset"
        },
        {
            "cluster": 124,
            "id": "X_A_Asset"
        },
        {
            "cluster": 125,
            "id": "MRequest"
        },
        {
            "cluster": 125,
            "id": "MRefList"
        },
        {
            "cluster": 125,
            "id": "X_AD_Ref_List"
        },
        {
            "cluster": 125,
            "id": "X_R_RequestType"
        },
        {
            "cluster": 125,
            "id": "MRequestType"
        },
        {
            "cluster": 125,
            "id": "X_R_Group"
        },
        {
            "cluster": 125,
            "id": "MGroup"
        },
        {
            "cluster": 125,
            "id": "X_R_Status"
        },
        {
            "cluster": 125,
            "id": "MStatus"
        },
        {
            "cluster": 125,
            "id": "X_R_Request"
        },
        {
            "cluster": 125,
            "id": "MRequestUpdate"
        },
        {
            "cluster": 125,
            "id": "X_R_RequestUpdate"
        },
        {
            "cluster": 126,
            "id": "MReport"
        },
        {
            "cluster": 126,
            "id": "MReportColumnSet"
        },
        {
            "cluster": 126,
            "id": "X_PA_ReportColumnSet"
        },
        {
            "cluster": 126,
            "id": "MReportLineSet"
        },
        {
            "cluster": 126,
            "id": "X_PA_ReportLineSet"
        },
        {
            "cluster": 126,
            "id": "X_PA_Report"
        },
        {
            "cluster": 127,
            "id": "MImage"
        },
        {
            "cluster": 127,
            "id": "X_AD_Image"
        },
        {
            "cluster": 128,
            "id": "X_AD_Window"
        },
        {
            "cluster": 128,
            "id": "MWindow"
        },
        {
            "cluster": 129,
            "id": "MAllocationHdr"
        },
        {
            "cluster": 129,
            "id": "X_C_AllocationLine"
        },
        {
            "cluster": 129,
            "id": "MAllocationLine"
        },
        {
            "cluster": 129,
            "id": "X_C_AllocationHdr"
        },
        {
            "cluster": 130,
            "id": "X_AD_Form_Access"
        },
        {
            "cluster": 130,
            "id": "MFormAccess"
        },
        {
            "cluster": 131,
            "id": "X_AD_Org"
        },
        {
            "cluster": 131,
            "id": "BPartnerOrgLink"
        },
        {
            "cluster": 131,
            "id": "MOrg"
        },
        {
            "cluster": 132,
            "id": "X_W_Click"
        },
        {
            "cluster": 132,
            "id": "MClick"
        },
        {
            "cluster": 133,
            "id": "MCostUpdate"
        },
        {
            "cluster": 133,
            "id": "X_M_CostUpdate"
        },
        {
            "cluster": 134,
            "id": "MCashLine"
        },
        {
            "cluster": 134,
            "id": "X_C_CashLine"
        },
        {
            "cluster": 135,
            "id": "DunningPrint"
        },
        {
            "cluster": 135,
            "id": "ReportEngine"
        },
        {
            "cluster": 135,
            "id": "X_C_DunningLevel"
        },
        {
            "cluster": 136,
            "id": "X_AD_PrintColor"
        },
        {
            "cluster": 136,
            "id": "MPrintColor"
        },
        {
            "cluster": 137,
            "id": "X_C_Dunning"
        },
        {
            "cluster": 137,
            "id": "MDunning"
        },
        {
            "cluster": 138,
            "id": "MProductBOM"
        },
        {
            "cluster": 138,
            "id": "X_M_Product_BOM"
        },
        {
            "cluster": 139,
            "id": "X_AD_TreeNodeBP"
        },
        {
            "cluster": 139,
            "id": "MTreeNodeBP"
        },
        {
            "cluster": 140,
            "id": "ReplenishReport"
        },
        {
            "cluster": 140,
            "id": "X_M_Warehouse"
        },
        {
            "cluster": 140,
            "id": "X_T_Replenish"
        },
        {
            "cluster": 141,
            "id": "MMeasure"
        },
        {
            "cluster": 141,
            "id": "X_PA_Measure"
        },
        {
            "cluster": 142,
            "id": "UIFieldVOFactory"
        },
        {
            "cluster": 142,
            "id": "UIFieldVOFT"
        },
        {
            "cluster": 143,
            "id": "MCostQueue"
        },
        {
            "cluster": 143,
            "id": "X_M_CostQueue"
        },
        {
            "cluster": 144,
            "id": "MInOut"
        },
        {
            "cluster": 144,
            "id": "X_M_InOutLineMA"
        },
        {
            "cluster": 144,
            "id": "MInOutLineMA"
        },
        {
            "cluster": 144,
            "id": "X_M_InOutLine"
        },
        {
            "cluster": 144,
            "id": "MInOutLine"
        },
        {
            "cluster": 144,
            "id": "X_M_InOut"
        },
        {
            "cluster": 145,
            "id": "ImportBPartner"
        },
        {
            "cluster": 145,
            "id": "X_C_BPartner_Location"
        },
        {
            "cluster": 145,
            "id": "MBPartnerLocation"
        },
        {
            "cluster": 145,
            "id": "X_C_Location"
        },
        {
            "cluster": 145,
            "id": "Tax"
        },
        {
            "cluster": 145,
            "id": "X_C_Tax"
        },
        {
            "cluster": 145,
            "id": "MTax"
        },
        {
            "cluster": 145,
            "id": "X_I_BPartner"
        },
        {
            "cluster": 146,
            "id": "Callout"
        },
        {
            "cluster": 146,
            "id": "ImpFormatRow"
        },
        {
            "cluster": 146,
            "id": "ImpFormat"
        },
        {
            "cluster": 147,
            "id": "CompiereProcessorLog"
        },
        {
            "cluster": 147,
            "id": "MAcctProcessorLog"
        },
        {
            "cluster": 147,
            "id": "X_C_AcctProcessorLog"
        },
        {
            "cluster": 147,
            "id": "MLdapProcessorLog"
        },
        {
            "cluster": 147,
            "id": "X_AD_LdapProcessorLog"
        },
        {
            "cluster": 147,
            "id": "MRequestProcessorLog"
        },
        {
            "cluster": 147,
            "id": "X_R_RequestProcessorLog"
        },
        {
            "cluster": 147,
            "id": "MSchedulerLog"
        },
        {
            "cluster": 147,
            "id": "X_AD_SchedulerLog"
        },
        {
            "cluster": 147,
            "id": "MAlertProcessorLog"
        },
        {
            "cluster": 147,
            "id": "X_AD_AlertProcessorLog"
        },
        {
            "cluster": 147,
            "id": "MWorkflowProcessorLog"
        },
        {
            "cluster": 147,
            "id": "X_AD_WorkflowProcessorLog"
        },
        {
            "cluster": 148,
            "id": "Aging"
        },
        {
            "cluster": 148,
            "id": "X_T_Aging"
        },
        {
            "cluster": 148,
            "id": "MAging"
        },
        {
            "cluster": 149,
            "id": "RequestEntity"
        },
        {
            "cluster": 149,
            "id": "MultipartRequestEntity"
        },
        {
            "cluster": 150,
            "id": "Env"
        },
        {
            "cluster": 150,
            "id": "MigrateData"
        },
        {
            "cluster": 150,
            "id": "EnvConstants"
        },
        {
            "cluster": 150,
            "id": "MSchedule"
        },
        {
            "cluster": 150,
            "id": "X_AD_Schedule"
        },
        {
            "cluster": 151,
            "id": "X_M_LotCtl"
        },
        {
            "cluster": 151,
            "id": "MLotCtl"
        },
        {
            "cluster": 152,
            "id": "ImportPayment"
        },
        {
            "cluster": 152,
            "id": "X_I_Payment"
        },
        {
            "cluster": 153,
            "id": "MProject"
        },
        {
            "cluster": 153,
            "id": "X_C_Project"
        },
        {
            "cluster": 154,
            "id": "X_M_DiscountSchemaLine"
        },
        {
            "cluster": 154,
            "id": "MDiscountSchemaLine"
        },
        {
            "cluster": 154,
            "id": "PriceListCreate"
        },
        {
            "cluster": 155,
            "id": "HttpConnectionParams"
        },
        {
            "cluster": 155,
            "id": "DefaultHttpParams"
        },
        {
            "cluster": 155,
            "id": "HttpMethodParams"
        },
        {
            "cluster": 155,
            "id": "HttpParams"
        },
        {
            "cluster": 156,
            "id": "MReturnPolicy"
        },
        {
            "cluster": 156,
            "id": "X_M_ReturnPolicy"
        },
        {
            "cluster": 157,
            "id": "ImportLocator"
        },
        {
            "cluster": 157,
            "id": "X_I_Locator"
        },
        {
            "cluster": 158,
            "id": "MBankStatementLoader"
        },
        {
            "cluster": 158,
            "id": "OFXBankStatementHandler"
        },
        {
            "cluster": 158,
            "id": "SAXException"
        },
        {
            "cluster": 158,
            "id": "OFXFileBankStatementLoader"
        },
        {
            "cluster": 158,
            "id": "X_C_BankStatementLoader"
        },
        {
            "cluster": 158,
            "id": "LoadBankStatement"
        },
        {
            "cluster": 158,
            "id": "X_I_BankStatement"
        },
        {
            "cluster": 158,
            "id": "ImportBankStatement"
        },
        {
            "cluster": 158,
            "id": "X_C_BankStatementLine"
        },
        {
            "cluster": 158,
            "id": "MBankStatementLine"
        },
        {
            "cluster": 158,
            "id": "BankStatementLoaderInterface"
        },
        {
            "cluster": 159,
            "id": "Trx"
        },
        {
            "cluster": 159,
            "id": "AllocationReset"
        },
        {
            "cluster": 160,
            "id": "MInvoicePaySchedule"
        },
        {
            "cluster": 160,
            "id": "X_C_InvoicePaySchedule"
        },
        {
            "cluster": 161,
            "id": "X_AD_ReportView"
        },
        {
            "cluster": 161,
            "id": "MReportView"
        },
        {
            "cluster": 162,
            "id": "MPOSKeyLayout"
        },
        {
            "cluster": 162,
            "id": "X_C_POSKeyLayout"
        },
        {
            "cluster": 163,
            "id": "X_C_Country"
        },
        {
            "cluster": 163,
            "id": "MCountry"
        },
        {
            "cluster": 164,
            "id": "ColumnSync"
        },
        {
            "cluster": 164,
            "id": "CompiereUserException"
        },
        {
            "cluster": 165,
            "id": "X_C_BPartner_Product"
        },
        {
            "cluster": 165,
            "id": "MBPartnerProduct"
        },
        {
            "cluster": 166,
            "id": "X_C_TaxCategory"
        },
        {
            "cluster": 166,
            "id": "MTaxCategory"
        },
        {
            "cluster": 167,
            "id": "MLead"
        },
        {
            "cluster": 167,
            "id": "X_C_Lead"
        },
        {
            "cluster": 168,
            "id": "X_C_Currency"
        },
        {
            "cluster": 168,
            "id": "MCurrency"
        },
        {
            "cluster": 168,
            "id": "CalloutPayment"
        },
        {
            "cluster": 169,
            "id": "X_M_ProductionLine"
        },
        {
            "cluster": 169,
            "id": "MProductionLine"
        },
        {
            "cluster": 170,
            "id": "AssetDelivery"
        },
        {
            "cluster": 170,
            "id": "EMail"
        },
        {
            "cluster": 170,
            "id": "MUserMail"
        },
        {
            "cluster": 170,
            "id": "X_AD_UserMail"
        },
        {
            "cluster": 170,
            "id": "MMailText"
        },
        {
            "cluster": 170,
            "id": "X_R_MailText"
        },
        {
            "cluster": 171,
            "id": "MRfQTopicSubscriber"
        },
        {
            "cluster": 171,
            "id": "X_C_RfQ_TopicSubscriber"
        },
        {
            "cluster": 172,
            "id": "MCommissionRun"
        },
        {
            "cluster": 172,
            "id": "X_C_CommissionRun"
        },
        {
            "cluster": 173,
            "id": "ImportConversionRate"
        },
        {
            "cluster": 173,
            "id": "X_I_Conversion_Rate"
        },
        {
            "cluster": 174,
            "id": "UIWindow"
        },
        {
            "cluster": 174,
            "id": "UIWindowVO"
        },
        {
            "cluster": 175,
            "id": "X_AD_ClientInfo"
        },
        {
            "cluster": 175,
            "id": "MClientInfo"
        },
        {
            "cluster": 176,
            "id": "MProjectIssue"
        },
        {
            "cluster": 176,
            "id": "X_C_ProjectIssue"
        },
        {
            "cluster": 176,
            "id": "ProjectIssue"
        },
        {
            "cluster": 177,
            "id": "X_C_BP_Status"
        },
        {
            "cluster": 177,
            "id": "MBPStatus"
        },
        {
            "cluster": 178,
            "id": "X_C_RfQ_TopicSubscriberOnly"
        },
        {
            "cluster": 178,
            "id": "MRfQTopicSubscriberOnly"
        },
        {
            "cluster": 179,
            "id": "MCStage"
        },
        {
            "cluster": 179,
            "id": "X_CM_TemplateTable"
        },
        {
            "cluster": 179,
            "id": "X_CM_CStageTTable"
        },
        {
            "cluster": 179,
            "id": "X_CM_CStage"
        },
        {
            "cluster": 180,
            "id": "X_M_SerNoCtl"
        },
        {
            "cluster": 180,
            "id": "MSerNoCtl"
        },
        {
            "cluster": 181,
            "id": "MNewsItem"
        },
        {
            "cluster": 181,
            "id": "X_CM_NewsItem"
        },
        {
            "cluster": 182,
            "id": "MStore"
        },
        {
            "cluster": 182,
            "id": "X_W_Store"
        },
        {
            "cluster": 183,
            "id": "MPaySchedule"
        },
        {
            "cluster": 183,
            "id": "X_C_PaySchedule"
        },
        {
            "cluster": 184,
            "id": "UIWindowVOFactory"
        },
        {
            "cluster": 184,
            "id": "UIWindowVOFT"
        },
        {
            "cluster": 185,
            "id": "X_AD_Tree"
        },
        {
            "cluster": 185,
            "id": "MTree"
        },
        {
            "cluster": 185,
            "id": "TreeMaintenance"
        },
        {
            "cluster": 186,
            "id": "X_M_ReturnPolicyLine"
        },
        {
            "cluster": 186,
            "id": "MReturnPolicyLine"
        },
        {
            "cluster": 187,
            "id": "X_M_Locator"
        },
        {
            "cluster": 187,
            "id": "MLocator"
        },
        {
            "cluster": 188,
            "id": "MInvoice"
        },
        {
            "cluster": 188,
            "id": "X_C_InvoiceBatch"
        },
        {
            "cluster": 188,
            "id": "MInvoiceBatch"
        },
        {
            "cluster": 188,
            "id": "X_C_InvoiceTax"
        },
        {
            "cluster": 188,
            "id": "MInvoiceTax"
        },
        {
            "cluster": 188,
            "id": "X_C_InvoiceBatchLine"
        },
        {
            "cluster": 188,
            "id": "InvoiceBatchProcess"
        },
        {
            "cluster": 188,
            "id": "MInvoiceBatchLine"
        },
        {
            "cluster": 188,
            "id": "X_C_Invoice"
        },
        {
            "cluster": 188,
            "id": "MTaxDeclarationLine"
        },
        {
            "cluster": 188,
            "id": "X_C_TaxDeclarationLine"
        },
        {
            "cluster": 189,
            "id": "X_K_Category"
        },
        {
            "cluster": 189,
            "id": "MKCategory"
        },
        {
            "cluster": 190,
            "id": "MAd"
        },
        {
            "cluster": 190,
            "id": "X_CM_Ad"
        },
        {
            "cluster": 191,
            "id": "Ctx"
        },
        {
            "cluster": 191,
            "id": "GwtServerUtil"
        },
        {
            "cluster": 191,
            "id": "Evaluatee"
        },
        {
            "cluster": 191,
            "id": "GridTabVO"
        },
        {
            "cluster": 191,
            "id": "CalloutOrder"
        },
        {
            "cluster": 191,
            "id": "WebSessionCtx"
        },
        {
            "cluster": 191,
            "id": "DisplayType"
        },
        {
            "cluster": 192,
            "id": "MDunningRunLine"
        },
        {
            "cluster": 192,
            "id": "MConversionRate"
        },
        {
            "cluster": 192,
            "id": "X_C_Conversion_Rate"
        },
        {
            "cluster": 192,
            "id": "X_C_DunningRunLine"
        },
        {
            "cluster": 193,
            "id": "X_AD_ImpFormat"
        },
        {
            "cluster": 193,
            "id": "MImpFormat"
        },
        {
            "cluster": 193,
            "id": "CopyImportFormat"
        },
        {
            "cluster": 194,
            "id": "X_C_TaxDeclarationAcct"
        },
        {
            "cluster": 194,
            "id": "MTaxDeclarationAcct"
        },
        {
            "cluster": 195,
            "id": "MRfQLine"
        },
        {
            "cluster": 195,
            "id": "X_C_RfQLine"
        },
        {
            "cluster": 195,
            "id": "RfQCopyLines"
        },
        {
            "cluster": 196,
            "id": "MScheduler"
        },
        {
            "cluster": 196,
            "id": "X_AD_PInstance_Para"
        },
        {
            "cluster": 196,
            "id": "MPInstancePara"
        },
        {
            "cluster": 196,
            "id": "X_AD_Note"
        },
        {
            "cluster": 196,
            "id": "MAttachment"
        },
        {
            "cluster": 196,
            "id": "X_AD_Attachment"
        },
        {
            "cluster": 196,
            "id": "MNote"
        },
        {
            "cluster": 196,
            "id": "MProcess"
        },
        {
            "cluster": 196,
            "id": "X_AD_Process"
        },
        {
            "cluster": 196,
            "id": "MSchedulerPara"
        },
        {
            "cluster": 196,
            "id": "MProcessPara"
        },
        {
            "cluster": 196,
            "id": "X_AD_Process_Para"
        },
        {
            "cluster": 196,
            "id": "X_AD_Scheduler_Para"
        },
        {
            "cluster": 196,
            "id": "X_AD_Scheduler"
        },
        {
            "cluster": 197,
            "id": "X_PA_Hierarchy"
        },
        {
            "cluster": 197,
            "id": "MHierarchy"
        },
        {
            "cluster": 198,
            "id": "MGoal"
        },
        {
            "cluster": 198,
            "id": "X_PA_Goal"
        },
        {
            "cluster": 199,
            "id": "MCommissionAmt"
        },
        {
            "cluster": 199,
            "id": "X_C_CommissionAmt"
        },
        {
            "cluster": 200,
            "id": "Part"
        },
        {
            "cluster": 200,
            "id": "PartBase"
        },
        {
            "cluster": 200,
            "id": "StringPart"
        },
        {
            "cluster": 200,
            "id": "FilePart"
        },
        {
            "cluster": 201,
            "id": "MAlert"
        },
        {
            "cluster": 201,
            "id": "MAlertRecipient"
        },
        {
            "cluster": 201,
            "id": "X_AD_AlertRecipient"
        },
        {
            "cluster": 201,
            "id": "X_AD_Alert"
        },
        {
            "cluster": 202,
            "id": "MColor"
        },
        {
            "cluster": 202,
            "id": "CompiereColor"
        },
        {
            "cluster": 202,
            "id": "X_AD_Color"
        },
        {
            "cluster": 203,
            "id": "X_K_IndexStop"
        },
        {
            "cluster": 203,
            "id": "MIndexStop"
        },
        {
            "cluster": 204,
            "id": "FastByteArrayOutputStream"
        },
        {
            "cluster": 204,
            "id": "DeepCopy"
        },
        {
            "cluster": 205,
            "id": "ColumnEncryption"
        },
        {
            "cluster": 205,
            "id": "MColumn"
        },
        {
            "cluster": 206,
            "id": "X_CM_WebProject_Domain"
        },
        {
            "cluster": 206,
            "id": "MWebProjectDomain"
        },
        {
            "cluster": 207,
            "id": "UITab"
        },
        {
            "cluster": 207,
            "id": "UITabVO"
        },
        {
            "cluster": 208,
            "id": "MWarehousePrice"
        },
        {
            "cluster": 208,
            "id": "X_RV_WarehousePrice"
        },
        {
            "cluster": 209,
            "id": "X_C_ValidCombination"
        },
        {
            "cluster": 209,
            "id": "MAccount"
        },
        {
            "cluster": 209,
            "id": "MDistribution"
        },
        {
            "cluster": 209,
            "id": "MDistributionLine"
        },
        {
            "cluster": 209,
            "id": "X_GL_DistributionLine"
        },
        {
            "cluster": 209,
            "id": "X_GL_Distribution"
        },
        {
            "cluster": 209,
            "id": "AcctSchemaCopyAcct"
        },
        {
            "cluster": 209,
            "id": "MJournal"
        },
        {
            "cluster": 209,
            "id": "MPeriod"
        },
        {
            "cluster": 209,
            "id": "X_C_Period"
        },
        {
            "cluster": 209,
            "id": "X_GL_Journal"
        },
        {
            "cluster": 210,
            "id": "MPaymentTerm"
        },
        {
            "cluster": 210,
            "id": "X_C_PaymentTerm"
        },
        {
            "cluster": 211,
            "id": "MCalendar"
        },
        {
            "cluster": 211,
            "id": "X_C_Calendar"
        },
        {
            "cluster": 212,
            "id": "MAttributeSetInstance"
        },
        {
            "cluster": 212,
            "id": "X_M_Lot"
        },
        {
            "cluster": 212,
            "id": "MLot"
        },
        {
            "cluster": 212,
            "id": "MAttributeSet"
        },
        {
            "cluster": 212,
            "id": "X_M_AttributeSet"
        },
        {
            "cluster": 212,
            "id": "X_M_AttributeSetInstance"
        },
        {
            "cluster": 213,
            "id": "X_C_SalesRegion"
        },
        {
            "cluster": 213,
            "id": "MSalesRegion"
        },
        {
            "cluster": 214,
            "id": "MIndex"
        },
        {
            "cluster": 214,
            "id": "X_K_Index"
        },
        {
            "cluster": 215,
            "id": "X_S_TimeExpenseLine"
        },
        {
            "cluster": 215,
            "id": "ExpenseAPInvoice"
        },
        {
            "cluster": 215,
            "id": "ExpenseSOrder"
        },
        {
            "cluster": 215,
            "id": "MTimeExpenseLine"
        },
        {
            "cluster": 216,
            "id": "ImportInvoice"
        },
        {
            "cluster": 216,
            "id": "X_I_Invoice"
        },
        {
            "cluster": 217,
            "id": "MImpFormatRow"
        },
        {
            "cluster": 217,
            "id": "X_AD_ImpFormat_Row"
        },
        {
            "cluster": 218,
            "id": "ScheduleUtil"
        },
        {
            "cluster": 218,
            "id": "Language"
        },
        {
            "cluster": 218,
            "id": "Msg"
        },
        {
            "cluster": 218,
            "id": "TimeUtil"
        },
        {
            "cluster": 218,
            "id": "MFactAccumulation"
        },
        {
            "cluster": 218,
            "id": "X_Fact_Accumulation"
        },
        {
            "cluster": 218,
            "id": "MAssignmentSlot"
        },
        {
            "cluster": 218,
            "id": "X_S_ResourceAssignment"
        },
        {
            "cluster": 218,
            "id": "MResourceAssignment"
        },
        {
            "cluster": 219,
            "id": "MReportLine"
        },
        {
            "cluster": 219,
            "id": "MReportSource"
        },
        {
            "cluster": 219,
            "id": "X_PA_ReportSource"
        },
        {
            "cluster": 219,
            "id": "X_PA_ReportLine"
        },
        {
            "cluster": 220,
            "id": "X_AD_Role_OrgAccess"
        },
        {
            "cluster": 220,
            "id": "MRoleOrgAccess"
        },
        {
            "cluster": 221,
            "id": "X_AD_FieldGroup"
        },
        {
            "cluster": 221,
            "id": "MFieldGroup"
        },
        {
            "cluster": 222,
            "id": "TranslationMgr"
        },
        {
            "cluster": 222,
            "id": "Document"
        },
        {
            "cluster": 222,
            "id": "Element"
        },
        {
            "cluster": 222,
            "id": "ElementRegistry"
        },
        {
            "cluster": 222,
            "id": "GenericElement"
        },
        {
            "cluster": 222,
            "id": "ElementAttributes"
        },
        {
            "cluster": 222,
            "id": "ConcreteElement"
        },
        {
            "cluster": 222,
            "id": "HtmlCode"
        },
        {
            "cluster": 222,
            "id": "Attributes"
        },
        {
            "cluster": 222,
            "id": "TranslationHandler"
        },
        {
            "cluster": 222,
            "id": "Node"
        },
        {
            "cluster": 222,
            "id": "TranslationImportExport"
        },
        {
            "cluster": 223,
            "id": "MDunningRun"
        },
        {
            "cluster": 223,
            "id": "X_C_DunningRun"
        },
        {
            "cluster": 224,
            "id": "MChatEntry"
        },
        {
            "cluster": 224,
            "id": "X_CM_ChatEntry"
        },
        {
            "cluster": 225,
            "id": "MProjectPhase"
        },
        {
            "cluster": 225,
            "id": "X_C_Phase"
        },
        {
            "cluster": 225,
            "id": "MProjectTypePhase"
        },
        {
            "cluster": 225,
            "id": "X_C_ProjectPhase"
        },
        {
            "cluster": 225,
            "id": "ProjectPhaseGenOrder"
        },
        {
            "cluster": 225,
            "id": "X_C_ProjectTask"
        },
        {
            "cluster": 225,
            "id": "MProjectTask"
        },
        {
            "cluster": 225,
            "id": "X_C_Task"
        },
        {
            "cluster": 225,
            "id": "MProjectTypeTask"
        },
        {
            "cluster": 226,
            "id": "MInOutConfirm"
        },
        {
            "cluster": 226,
            "id": "X_M_InOutLineConfirm"
        },
        {
            "cluster": 226,
            "id": "MInOutLineConfirm"
        },
        {
            "cluster": 226,
            "id": "X_M_InOutConfirm"
        },
        {
            "cluster": 227,
            "id": "MProductDownload"
        },
        {
            "cluster": 227,
            "id": "X_M_ProductDownload"
        },
        {
            "cluster": 228,
            "id": "X_R_RequestProcessor_Route"
        },
        {
            "cluster": 228,
            "id": "MRequestProcessorRoute"
        },
        {
            "cluster": 229,
            "id": "X_C_BP_Relation"
        },
        {
            "cluster": 229,
            "id": "MBPRelation"
        },
        {
            "cluster": 230,
            "id": "MAlertProcessor"
        },
        {
            "cluster": 230,
            "id": "X_AD_AlertProcessor"
        },
        {
            "cluster": 231,
            "id": "DistributionRun"
        },
        {
            "cluster": 231,
            "id": "X_M_DistributionRun"
        },
        {
            "cluster": 231,
            "id": "MDistributionRun"
        },
        {
            "cluster": 231,
            "id": "MDistributionRunLine"
        },
        {
            "cluster": 231,
            "id": "X_M_DistributionRunLine"
        },
        {
            "cluster": 231,
            "id": "MDistributionRunDetail"
        },
        {
            "cluster": 231,
            "id": "X_T_DistributionRunDetail"
        },
        {
            "cluster": 232,
            "id": "MBank"
        },
        {
            "cluster": 232,
            "id": "BankVerificationInterface"
        },
        {
            "cluster": 232,
            "id": "X_C_Bank"
        },
        {
            "cluster": 233,
            "id": "MPriceListVersion"
        },
        {
            "cluster": 233,
            "id": "X_M_PriceList_Version"
        },
        {
            "cluster": 234,
            "id": "PeriodControlStatus"
        },
        {
            "cluster": 234,
            "id": "CacheMgt"
        },
        {
            "cluster": 234,
            "id": "X_C_PeriodControl"
        },
        {
            "cluster": 234,
            "id": "MPeriodControl"
        },
        {
            "cluster": 235,
            "id": "MWFActivity"
        },
        {
            "cluster": 235,
            "id": "MWFResponsible"
        },
        {
            "cluster": 235,
            "id": "X_AD_WF_Responsible"
        },
        {
            "cluster": 235,
            "id": "X_AD_OrgInfo"
        },
        {
            "cluster": 235,
            "id": "MOrgInfo"
        },
        {
            "cluster": 235,
            "id": "MWFNodePara"
        },
        {
            "cluster": 235,
            "id": "X_AD_WF_Node_Para"
        },
        {
            "cluster": 235,
            "id": "X_AD_WF_EventAudit"
        },
        {
            "cluster": 235,
            "id": "MWFEventAudit"
        },
        {
            "cluster": 235,
            "id": "DocAction"
        },
        {
            "cluster": 235,
            "id": "DocumentEngine"
        },
        {
            "cluster": 235,
            "id": "X_AD_WF_Activity"
        },
        {
            "cluster": 236,
            "id": "X_AD_InfoColumn"
        },
        {
            "cluster": 236,
            "id": "MInfoColumn"
        },
        {
            "cluster": 237,
            "id": "ImportInOutConfirm"
        },
        {
            "cluster": 237,
            "id": "X_I_InOutLineConfirm"
        },
        {
            "cluster": 238,
            "id": "X_C_ProjectLine"
        },
        {
            "cluster": 238,
            "id": "ProjectGenOrder"
        },
        {
            "cluster": 238,
            "id": "MProjectLine"
        },
        {
            "cluster": 239,
            "id": "MProductLocator"
        },
        {
            "cluster": 239,
            "id": "X_M_ProductLocator"
        },
        {
            "cluster": 240,
            "id": "MDiscountSchema"
        },
        {
            "cluster": 240,
            "id": "X_M_DiscountSchemaBreak"
        },
        {
            "cluster": 240,
            "id": "MDiscountSchemaBreak"
        },
        {
            "cluster": 240,
            "id": "X_M_DiscountSchema"
        },
        {
            "cluster": 241,
            "id": "ImportGLJournal"
        },
        {
            "cluster": 241,
            "id": "X_I_GLJournal"
        },
        {
            "cluster": 242,
            "id": "X_AD_WF_Block"
        },
        {
            "cluster": 242,
            "id": "MWFBlock"
        },
        {
            "cluster": 243,
            "id": "MRequisition"
        },
        {
            "cluster": 243,
            "id": "X_M_Requisition"
        },
        {
            "cluster": 244,
            "id": "MRegistration"
        },
        {
            "cluster": 244,
            "id": "X_A_Registration"
        },
        {
            "cluster": 245,
            "id": "X_AD_ComponentCreate"
        },
        {
            "cluster": 245,
            "id": "MComponentCreate"
        },
        {
            "cluster": 246,
            "id": "X_C_Withholding"
        },
        {
            "cluster": 246,
            "id": "MWithholding"
        },
        {
            "cluster": 247,
            "id": "MWebProject"
        },
        {
            "cluster": 247,
            "id": "X_CM_WebProject"
        },
        {
            "cluster": 248,
            "id": "X_C_Element"
        },
        {
            "cluster": 248,
            "id": "MElement"
        },
        {
            "cluster": 249,
            "id": "MDocTypeCounter"
        },
        {
            "cluster": 249,
            "id": "X_C_DocTypeCounter"
        },
        {
            "cluster": 250,
            "id": "MPayment"
        },
        {
            "cluster": 250,
            "id": "ProcessCall"
        },
        {
            "cluster": 250,
            "id": "MPaymentValidate"
        },
        {
            "cluster": 250,
            "id": "X_C_BP_BankAccount"
        },
        {
            "cluster": 250,
            "id": "MBPBankAccount"
        },
        {
            "cluster": 250,
            "id": "X_C_Payment"
        },
        {
            "cluster": 250,
            "id": "PP_PayFlowPro"
        },
        {
            "cluster": 250,
            "id": "PaymentProcessor"
        },
        {
            "cluster": 250,
            "id": "PP_PayPal"
        },
        {
            "cluster": 250,
            "id": "PP_Authorize"
        },
        {
            "cluster": 250,
            "id": "PP_Optimal"
        },
        {
            "cluster": 250,
            "id": "X_C_PaymentProcessor"
        },
        {
            "cluster": 250,
            "id": "MPaymentProcessor"
        },
        {
            "cluster": 250,
            "id": "BankStatementPayment"
        },
        {
            "cluster": 250,
            "id": "AllocationAuto"
        },
        {
            "cluster": 251,
            "id": "DB"
        },
        {
            "cluster": 251,
            "id": "ViewCreate"
        },
        {
            "cluster": 251,
            "id": "ASyncProcess"
        },
        {
            "cluster": 251,
            "id": "ASyncWorker"
        },
        {
            "cluster": 251,
            "id": "WebInfo"
        },
        {
            "cluster": 251,
            "id": "MSession"
        },
        {
            "cluster": 251,
            "id": "ImportRequest"
        },
        {
            "cluster": 251,
            "id": "X_I_Request"
        },
        {
            "cluster": 252,
            "id": "X_CM_ChatType"
        },
        {
            "cluster": 252,
            "id": "MChatType"
        },
        {
            "cluster": 253,
            "id": "X_AD_TreeNodeCMT"
        },
        {
            "cluster": 253,
            "id": "MTreeNodeCMT"
        },
        {
            "cluster": 254,
            "id": "MWFProcess"
        },
        {
            "cluster": 254,
            "id": "StateEngine"
        },
        {
            "cluster": 254,
            "id": "X_AD_WF_Process"
        },
        {
            "cluster": 255,
            "id": "MRequisitionLine"
        },
        {
            "cluster": 255,
            "id": "X_M_RequisitionLine"
        },
        {
            "cluster": 255,
            "id": "RequisitionPOCreate"
        },
        {
            "cluster": 256,
            "id": "RfQCreateSO"
        },
        {
            "cluster": 256,
            "id": "X_C_RfQ"
        },
        {
            "cluster": 256,
            "id": "MRfQ"
        },
        {
            "cluster": 257,
            "id": "UITabVOFactory"
        },
        {
            "cluster": 257,
            "id": "UITabVOFT"
        },
        {
            "cluster": 258,
            "id": "X_M_Shipper"
        },
        {
            "cluster": 258,
            "id": "MShipper"
        },
        {
            "cluster": 259,
            "id": "MMediaDeploy"
        },
        {
            "cluster": 259,
            "id": "X_CM_MediaDeploy"
        },
        {
            "cluster": 260,
            "id": "ViewImportFromDB"
        },
        {
            "cluster": 260,
            "id": "X_AD_ViewColumn"
        },
        {
            "cluster": 260,
            "id": "MViewColumn"
        },
        {
            "cluster": 260,
            "id": "X_AD_ViewComponent"
        },
        {
            "cluster": 260,
            "id": "MViewComponent"
        },
        {
            "cluster": 261,
            "id": "X_W_MailMsg"
        },
        {
            "cluster": 261,
            "id": "MMailMsg"
        },
        {
            "cluster": 262,
            "id": "CostUpdate"
        },
        {
            "cluster": 262,
            "id": "CompiereSystemException"
        },
        {
            "cluster": 263,
            "id": "RegisterSystem"
        },
        {
            "cluster": 263,
            "id": "X_AD_System"
        },
        {
            "cluster": 263,
            "id": "MSystem"
        },
        {
            "cluster": 263,
            "id": "X_AD_Registration"
        },
        {
            "cluster": 263,
            "id": "M_Registration"
        },
        {
            "cluster": 264,
            "id": "MStatusCategory"
        },
        {
            "cluster": 264,
            "id": "X_R_StatusCategory"
        },
        {
            "cluster": 265,
            "id": "X_AD_SchedulerRecipient"
        },
        {
            "cluster": 265,
            "id": "MSchedulerRecipient"
        },
        {
            "cluster": 266,
            "id": "X_Fact_Acct"
        },
        {
            "cluster": 266,
            "id": "MFactAcct"
        },
        {
            "cluster": 267,
            "id": "MPriceList"
        },
        {
            "cluster": 267,
            "id": "X_M_PriceList"
        },
        {
            "cluster": 268,
            "id": "MCampaign"
        },
        {
            "cluster": 268,
            "id": "X_C_Campaign"
        },
        {
            "cluster": 269,
            "id": "form"
        },
        {
            "cluster": 269,
            "id": "FormEvents"
        },
        {
            "cluster": 269,
            "id": "FileUpload"
        },
        {
            "cluster": 270,
            "id": "X_AD_TreeNodeCMS"
        },
        {
            "cluster": 270,
            "id": "MTreeNodeCMS"
        },
        {
            "cluster": 271,
            "id": "X_AD_TreeNodeCMC"
        },
        {
            "cluster": 271,
            "id": "MTreeNodeCMC"
        },
        {
            "cluster": 272,
            "id": "NamePair"
        },
        {
            "cluster": 272,
            "id": "KeyNamePair"
        },
        {
            "cluster": 272,
            "id": "ValueNamePair"
        },
        {
            "cluster": 272,
            "id": "GwtTest"
        },
        {
            "cluster": 273,
            "id": "X_M_PackageLine"
        },
        {
            "cluster": 273,
            "id": "MPackageLine"
        },
        {
            "cluster": 274,
            "id": "MIndexColumn"
        },
        {
            "cluster": 274,
            "id": "X_AD_IndexColumn"
        },
        {
            "cluster": 275,
            "id": "MTableIndex"
        },
        {
            "cluster": 275,
            "id": "X_AD_TableIndex"
        },
        {
            "cluster": 276,
            "id": "MJournalLine"
        },
        {
            "cluster": 276,
            "id": "X_GL_JournalLine"
        },
        {
            "cluster": 277,
            "id": "X_C_InvoiceSchedule"
        },
        {
            "cluster": 277,
            "id": "MInvoiceSchedule"
        },
        {
            "cluster": 278,
            "id": "MActivity"
        },
        {
            "cluster": 278,
            "id": "X_C_Activity"
        },
        {
            "cluster": 279,
            "id": "X_M_ChangeNotice"
        },
        {
            "cluster": 279,
            "id": "MChangeNotice"
        },
        {
            "cluster": 280,
            "id": "MInvoiceLine"
        },
        {
            "cluster": 280,
            "id": "X_C_LandedCostAllocation"
        },
        {
            "cluster": 280,
            "id": "MLandedCostAllocation"
        },
        {
            "cluster": 280,
            "id": "X_C_LandedCost"
        },
        {
            "cluster": 280,
            "id": "MLandedCost"
        },
        {
            "cluster": 280,
            "id": "X_C_InvoiceLine"
        },
        {
            "cluster": 281,
            "id": "MChangeRequest"
        },
        {
            "cluster": 281,
            "id": "X_M_ChangeRequest"
        },
        {
            "cluster": 282,
            "id": "X_AD_CtxArea"
        },
        {
            "cluster": 282,
            "id": "MCtxArea"
        },
        {
            "cluster": 283,
            "id": "X_AD_Private_Access"
        },
        {
            "cluster": 283,
            "id": "MPrivateAccess"
        },
        {
            "cluster": 284,
            "id": "ImportContact"
        },
        {
            "cluster": 284,
            "id": "X_I_Contact"
        },
        {
            "cluster": 285,
            "id": "MContainer"
        },
        {
            "cluster": 285,
            "id": "X_CM_CStage_Element"
        },
        {
            "cluster": 285,
            "id": "MCStageElement"
        },
        {
            "cluster": 285,
            "id": "X_CM_Container_Element"
        },
        {
            "cluster": 285,
            "id": "MContainerElement"
        },
        {
            "cluster": 285,
            "id": "X_CM_Container"
        },
        {
            "cluster": 286,
            "id": "X_AD_Workflow_Access"
        },
        {
            "cluster": 286,
            "id": "MWorkflowAccess"
        },
        {
            "cluster": 287,
            "id": "MPackage"
        },
        {
            "cluster": 287,
            "id": "X_M_Package"
        },
        {
            "cluster": 288,
            "id": "X_M_BOMAlternative"
        },
        {
            "cluster": 288,
            "id": "MBOMAlternative"
        },
        {
            "cluster": 289,
            "id": "X_R_Resolution"
        },
        {
            "cluster": 289,
            "id": "MResolution"
        },
        {
            "cluster": 290,
            "id": "X_R_Category"
        },
        {
            "cluster": 290,
            "id": "MRequestCategory"
        },
        {
            "cluster": 291,
            "id": "MTimeExpense"
        },
        {
            "cluster": 291,
            "id": "X_S_TimeExpense"
        },
        {
            "cluster": 292,
            "id": "X_AD_AlertRule"
        },
        {
            "cluster": 292,
            "id": "MAlertRule"
        },
        {
            "cluster": 293,
            "id": "X_PA_ColorSchema"
        },
        {
            "cluster": 293,
            "id": "MColorSchema"
        },
        {
            "cluster": 294,
            "id": "MBOM"
        },
        {
            "cluster": 294,
            "id": "X_M_BOM"
        },
        {
            "cluster": 295,
            "id": "X_CM_WikiToken"
        },
        {
            "cluster": 295,
            "id": "MWikiToken"
        }
    ]

var links_data = [
        {
            "source": "a",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MJournalBatch",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MInOutConfirm",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "NamePair",
            "value": 2.5
        },
        {
            "source": "ImportBankStatement",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "ChangeLogProcess",
            "target": "X_AD_ChangeLog",
            "value": 6.5
        },
        {
            "source": "OFX1ToXML",
            "target": "OFX1ToXML",
            "value": 4.5
        },
        {
            "source": "MRegistration",
            "target": "MRegistrationAttribute",
            "value": 0.5
        },
        {
            "source": "ColumnEncryption",
            "target": "CompiereUserException",
            "value": 0.5
        },
        {
            "source": "MMovement",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MBPartner",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "BankStatementPayment",
            "target": "MPayment",
            "value": 8.0
        },
        {
            "source": "MWorkflow",
            "target": "MWorkflow",
            "value": 6.0
        },
        {
            "source": "ColumnEncryption",
            "target": "MColumn",
            "value": 5.0
        },
        {
            "source": "MWFProcess",
            "target": "X_AD_WF_Activity",
            "value": 2.0
        },
        {
            "source": "MCStage",
            "target": "MCStageElement",
            "value": 1.0
        },
        {
            "source": "RColumn",
            "target": "FieldType",
            "value": 1.0
        },
        {
            "source": "MCashLine",
            "target": "MBankAccount",
            "value": 1.5
        },
        {
            "source": "SLACriteria",
            "target": "X_PA_SLA_Goal",
            "value": 1.0
        },
        {
            "source": "ImportInOutConfirm",
            "target": "DB",
            "value": 3.5
        },
        {
            "source": "MRequest",
            "target": "MRequest",
            "value": 30.0
        },
        {
            "source": "EntityTypeRegister",
            "target": "EntityEnclosingMethod",
            "value": 0.5
        },
        {
            "source": "MPaymentTerm",
            "target": "X_C_InvoicePaySchedule",
            "value": 1.5
        },
        {
            "source": "MWFActivity",
            "target": "MUser",
            "value": 2.0
        },
        {
            "source": "MTemplate",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "TranslationImportExport",
            "target": "X_AD_Table",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "X_C_OrderLine",
            "value": 0.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "MPaySelectionLine",
            "value": 3.0
        },
        {
            "source": "MScheduler",
            "target": "CompiereProcessor",
            "value": 2.0
        },
        {
            "source": "MTimeExpenseLine",
            "target": "MConversionRate",
            "value": 1.0
        },
        {
            "source": "MSchedulerPara",
            "target": "MProcessPara",
            "value": 2.0
        },
        {
            "source": "MRfQ",
            "target": "MRfQLine",
            "value": 0.5
        },
        {
            "source": "MStore",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "UIFieldVO",
            "target": "VO",
            "value": 2.0
        },
        {
            "source": "WebSessionCtx",
            "target": "DisplayType",
            "value": 3.0
        },
        {
            "source": "MJournalLine",
            "target": "X_GL_JournalLine",
            "value": 21.5
        },
        {
            "source": "GridWindow",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MRegistrationAttribute",
            "target": "MRegistrationAttribute",
            "value": 1.0
        },
        {
            "source": "MProcessPara",
            "target": "X_AD_Process_Para",
            "value": 2.0
        },
        {
            "source": "ASyncWorker",
            "target": "ProcessInfo",
            "value": 1.0
        },
        {
            "source": "MBank",
            "target": "X_C_Bank",
            "value": 3.5
        },
        {
            "source": "MInterestArea",
            "target": "X_R_InterestArea",
            "value": 3.5
        },
        {
            "source": "WebInfo",
            "target": "MSession",
            "value": 8.0
        },
        {
            "source": "MBankStatementLine",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MNewsItem",
            "target": "MIndex",
            "value": 1.0
        },
        {
            "source": "MDistribution",
            "target": "X_C_ValidCombination",
            "value": 6.5
        },
        {
            "source": "ImportOrder",
            "target": "NamePair",
            "value": 1.0
        },
        {
            "source": "MRfQTopicSubscriber",
            "target": "MRfQTopicSubscriberOnly",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "ValueNamePair",
            "value": 0.5
        },
        {
            "source": "MMedia",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MRfQResponseLine",
            "target": "X_C_RfQResponse",
            "value": 0.5
        },
        {
            "source": "MReportSource",
            "target": "MReportTree",
            "value": 0.5
        },
        {
            "source": "MWebProjectDomain",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWorkflowProcessor",
            "target": "MWorkflowProcessor",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_M_MatchInv",
            "value": 0.5
        },
        {
            "source": "MContainer",
            "target": "MWebProject",
            "value": 1.5
        },
        {
            "source": "MYear",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MPeriod",
            "target": "MOrg",
            "value": 1.5
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "MTax",
            "value": 1.0
        },
        {
            "source": "MRequest",
            "target": "MNote",
            "value": 0.5
        },
        {
            "source": "InOutGenerate",
            "target": "MInOut",
            "value": 2.0
        },
        {
            "source": "MUOMConversion",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "MCommissionRun",
            "target": "X_C_CommissionRun",
            "value": 5.0
        },
        {
            "source": "MLdapProcessorLog",
            "target": "X_AD_LdapProcessor",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "HtmlCode",
            "target": "ConcreteElement",
            "value": 2.5
        },
        {
            "source": "Tax",
            "target": "CLogger",
            "value": 4.5
        },
        {
            "source": "MMovementLine",
            "target": "MAttributeSet",
            "value": 1.0
        },
        {
            "source": "MInvoiceTax",
            "target": "X_C_InvoiceTax",
            "value": 11.5
        },
        {
            "source": "MProjectType",
            "target": "X_C_ProjectType",
            "value": 4.0
        },
        {
            "source": "MStorage",
            "target": "X_M_Locator",
            "value": 1.0
        },
        {
            "source": "MMediaServer",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MBPRelation",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MBankStatementLine",
            "target": "X_C_BankStatementLine",
            "value": 23.5
        },
        {
            "source": "MDataMigrationEntry",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MDiscountSchema",
            "target": "MDiscountSchema",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "MInOutConfirm",
            "value": 3.5
        },
        {
            "source": "MCostQueue",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MWFResponsible",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MChat",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MProductDownload",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "CostUpdate",
            "target": "X_M_Cost",
            "value": 9.0
        },
        {
            "source": "ImportInventory",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MStore",
            "target": "X_AD_Client",
            "value": 3.0
        },
        {
            "source": "InventoryCountCreate",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_WF_Process",
            "value": 3.5
        },
        {
            "source": "MRequestType",
            "target": "MRequestType",
            "value": 3.5
        },
        {
            "source": "ComponentProduct",
            "target": "MProductDownload",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "MProject",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "MUserRoles",
            "value": 0.5
        },
        {
            "source": "h2",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MAcctProcessor",
            "target": "CompiereProcessor",
            "value": 2.0
        },
        {
            "source": "MAlert",
            "target": "MAlert",
            "value": 1.5
        },
        {
            "source": "ReplenishReport",
            "target": "MMovementLine",
            "value": 1.0
        },
        {
            "source": "MLotCtl",
            "target": "MLot",
            "value": 0.5
        },
        {
            "source": "MTaxDeclarationLine",
            "target": "X_C_TaxDeclarationLine",
            "value": 14.0
        },
        {
            "source": "MInvoiceTax",
            "target": "MInvoiceLine",
            "value": 0.5
        },
        {
            "source": "MWorkflow",
            "target": "ProcessInfo",
            "value": 3.0
        },
        {
            "source": "MWFProcess",
            "target": "X_AD_Workflow",
            "value": 3.5
        },
        {
            "source": "MInOutConfirm",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_WF_Activity",
            "value": 40.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_Invoice",
            "value": 1.0
        },
        {
            "source": "MEntityType",
            "target": "X_AD_EntityType",
            "value": 2.0
        },
        {
            "source": "MAssignmentSlot",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "InventoryCountCreate",
            "target": "X_M_Inventory",
            "value": 1.0
        },
        {
            "source": "CalloutPayment",
            "target": "Ctx",
            "value": 6.0
        },
        {
            "source": "MContainer",
            "target": "X_CM_CStage_Element",
            "value": 3.0
        },
        {
            "source": "MOrder",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPeriod",
            "target": "X_C_Calendar",
            "value": 1.0
        },
        {
            "source": "DocWorkflowManager",
            "target": "MWorkflow",
            "value": 0.5
        },
        {
            "source": "TableCreateColumns",
            "target": "X_AD_Column",
            "value": 30.5
        },
        {
            "source": "VolumeTest",
            "target": "X_AD_PInstance",
            "value": 0.5
        },
        {
            "source": "MTaxCategory",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "ChangeLogProcess",
            "target": "FieldType",
            "value": 1.5
        },
        {
            "source": "MInventory",
            "target": "X_M_InventoryLine",
            "value": 12.5
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "X_C_Invoice",
            "value": 7.0
        },
        {
            "source": "ReplenishReport",
            "target": "MOrder",
            "value": 2.0
        },
        {
            "source": "InvoiceNGL",
            "target": "X_GL_JournalLine",
            "value": 7.0
        },
        {
            "source": "MRfQResponse",
            "target": "MRfQResponseLineQty",
            "value": 1.0
        },
        {
            "source": "RfQResponseRank",
            "target": "RfQResponseRank",
            "value": 1.0
        },
        {
            "source": "MCostDetail",
            "target": "X_AD_Client",
            "value": 3.5
        },
        {
            "source": "Tax",
            "target": "Env",
            "value": 2.0
        },
        {
            "source": "BankStatementPayment",
            "target": "CompiereSystemException",
            "value": 1.5
        },
        {
            "source": "BPartnerOrgLink",
            "target": "X_M_Locator",
            "value": 0.5
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "ResponseVO",
            "value": 0.5
        },
        {
            "source": "ImportBPartner",
            "target": "X_C_BPartner_Location",
            "value": 6.5
        },
        {
            "source": "CalloutOrder",
            "target": "X_M_InOut",
            "value": 3.0
        },
        {
            "source": "MPayment",
            "target": "X_C_Payment",
            "value": 199.5
        },
        {
            "source": "MClickCount",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_M_AttributeSet",
            "value": 1.5
        },
        {
            "source": "ProjectGenOrder",
            "target": "X_C_Project",
            "value": 3.0
        },
        {
            "source": "MProduct",
            "target": "X_S_Resource",
            "value": 5.0
        },
        {
            "source": "CostUpdate",
            "target": "X_M_CostElement",
            "value": 1.5
        },
        {
            "source": "MContainerElement",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "Env",
            "value": 1.0
        },
        {
            "source": "MCountry",
            "target": "X_C_Country",
            "value": 2.0
        },
        {
            "source": "ImportLocator",
            "target": "X_M_ProductLocator",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_WF_EventAudit",
            "value": 8.0
        },
        {
            "source": "WebLogin",
            "target": "WebInfo",
            "value": 3.5
        },
        {
            "source": "MInvoice",
            "target": "X_M_InOut",
            "value": 8.5
        },
        {
            "source": "ImportOrder",
            "target": "X_C_BPartner",
            "value": 1.5
        },
        {
            "source": "MLot",
            "target": "MLot",
            "value": 1.0
        },
        {
            "source": "MInOutLineConfirm",
            "target": "X_M_InOutConfirm",
            "value": 1.0
        },
        {
            "source": "MBPartnerInfo",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "FinStatement",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MOrgInfo",
            "target": "X_AD_OrgInfo",
            "value": 2.0
        },
        {
            "source": "WebProjectDeploy",
            "target": "MTreeNodeCMC",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_C_Order",
            "value": 2.5
        },
        {
            "source": "MProjectLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MLot",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MBankStatement",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MCash",
            "target": "X_C_AllocationLine",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "MCashBook",
            "value": 0.5
        },
        {
            "source": "ImportAccount",
            "target": "ImportAccount",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "X_M_Storage",
            "value": 2.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "MDunningRunLine",
            "value": 0.5
        },
        {
            "source": "CalloutPayment",
            "target": "MConversionRate",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "MReturnPolicy",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "FieldType",
            "value": 2.0
        },
        {
            "source": "InventoryCountCreate",
            "target": "InventoryCountCreate",
            "value": 0.5
        },
        {
            "source": "ViewCreate",
            "target": "ASyncProcess",
            "value": 2.0
        },
        {
            "source": "MCashLine",
            "target": "X_C_CashBook",
            "value": 1.0
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MWarehouse",
            "value": 1.0
        },
        {
            "source": "ImportBPartner",
            "target": "X_C_Location",
            "value": 9.0
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_Note",
            "value": 1.5
        },
        {
            "source": "MLandedCostAllocation",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MLdapProcessor",
            "target": "X_AD_LdapProcessor",
            "value": 5.0
        },
        {
            "source": "MJournal",
            "target": "X_M_Product",
            "value": 1.0
        },
        {
            "source": "DefaultHttpParams",
            "target": "HttpParams",
            "value": 2.0
        },
        {
            "source": "RModel",
            "target": "RColumn",
            "value": 2.0
        },
        {
            "source": "ChangeLogProcess",
            "target": "X_AD_Table",
            "value": 2.0
        },
        {
            "source": "MAssetGroup",
            "target": "X_A_Asset_Group",
            "value": 5.0
        },
        {
            "source": "FinStatement",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "MLdapProcessor",
            "target": "X_A_Asset_Delivery",
            "value": 1.0
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "MInvoiceBatch",
            "value": 1.0
        },
        {
            "source": "ColumnEncryption",
            "target": "X_AD_Column",
            "value": 6.5
        },
        {
            "source": "WebInfo",
            "target": "MRequestType",
            "value": 1.0
        },
        {
            "source": "MDistributionRun",
            "target": "MDistributionRunLine",
            "value": 0.5
        },
        {
            "source": "MMovementLineMA",
            "target": "X_M_MovementLine",
            "value": 0.5
        },
        {
            "source": "MMeasure",
            "target": "X_PA_Measure",
            "value": 14.0
        },
        {
            "source": "MOrderTax",
            "target": "MOrderTax",
            "value": 3.5
        },
        {
            "source": "MStore",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MMeasure",
            "target": "X_PA_Goal",
            "value": 4.5
        },
        {
            "source": "MCost",
            "target": "X_M_Product",
            "value": 16.5
        },
        {
            "source": "MAging",
            "target": "X_T_Aging",
            "value": 43.5
        },
        {
            "source": "MTemplate",
            "target": "X_CM_Template",
            "value": 12.0
        },
        {
            "source": "MFormAccess",
            "target": "X_AD_Form_Access",
            "value": 3.5
        },
        {
            "source": "MPaymentAllocate",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "link",
            "target": "SinglePartElement",
            "value": 2.0
        },
        {
            "source": "MBPartner",
            "target": "X_I_BPartner",
            "value": 5.0
        },
        {
            "source": "CostUpdate",
            "target": "CompiereSystemException",
            "value": 3.0
        },
        {
            "source": "MJournal",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MMovementLineMA",
            "target": "X_M_MovementLineMA",
            "value": 5.0
        },
        {
            "source": "MInventoryLine",
            "target": "MAttributeSet",
            "value": 1.0
        },
        {
            "source": "MBPGroup",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "StorageCleanup",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "MBank",
            "target": "MLocation",
            "value": 1.5
        },
        {
            "source": "WebLogin",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MRequest",
            "target": "MRefList",
            "value": 2.5
        },
        {
            "source": "MBank",
            "target": "X_AD_ClientInfo",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_C_DocType",
            "value": 4.5
        },
        {
            "source": "ImportOrder",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "MDunningRun",
            "target": "MDunningRunEntry",
            "value": 2.5
        },
        {
            "source": "MBankStatementMatcher",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "i",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "CalloutOrder",
            "target": "X_C_Order",
            "value": 8.0
        },
        {
            "source": "MCash",
            "target": "X_C_Cash",
            "value": 27.5
        },
        {
            "source": "MProduct",
            "target": "X_S_ResourceType",
            "value": 3.0
        },
        {
            "source": "MMeasureCalc",
            "target": "MMeasureCalc",
            "value": 1.5
        },
        {
            "source": "MPaymentAllocate",
            "target": "ResponseVO",
            "value": 1.0
        },
        {
            "source": "MWFEventAudit",
            "target": "X_AD_WF_Node",
            "value": 0.5
        },
        {
            "source": "MPeriod",
            "target": "TimeUtil",
            "value": 2.5
        },
        {
            "source": "MSLACriteria",
            "target": "MSLAGoal",
            "value": 0.5
        },
        {
            "source": "OrderPOCreate",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "ComponentProduct",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MBOMProduct",
            "value": 1.0
        },
        {
            "source": "MProduct",
            "target": "MAttributeSet",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "X_R_Category",
            "value": 0.5
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "CompiereUserException",
            "value": 2.5
        },
        {
            "source": "MInvoice",
            "target": "MUser",
            "value": 0.5
        },
        {
            "source": "MColor",
            "target": "MColor",
            "value": 3.0
        },
        {
            "source": "MInOut",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MBPartner",
            "target": "MAccount",
            "value": 0.5
        },
        {
            "source": "MReportColumnSet",
            "target": "X_PA_ReportColumnSet",
            "value": 3.0
        },
        {
            "source": "MChangeRequest",
            "target": "X_R_Request",
            "value": 1.0
        },
        {
            "source": "RequisitionPOCreate",
            "target": "CompiereUserException",
            "value": 1.5
        },
        {
            "source": "MInOutLineConfirm",
            "target": "X_M_InOutLineConfirm",
            "value": 13.5
        },
        {
            "source": "MWorkflowProcessor",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MSLAGoal",
            "target": "MSLAGoal",
            "value": 1.0
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "X_C_BPartner_Location",
            "value": 0.5
        },
        {
            "source": "MReportLine",
            "target": "X_PA_ReportLine",
            "value": 15.5
        },
        {
            "source": "MMovementConfirm",
            "target": "MMovementConfirm",
            "value": 5.0
        },
        {
            "source": "RModelData",
            "target": "RModelData",
            "value": 0.5
        },
        {
            "source": "ImportInOutConfirm",
            "target": "X_M_InOutLineConfirm",
            "value": 2.5
        },
        {
            "source": "VolumeTest",
            "target": "MPriceList",
            "value": 2.0
        },
        {
            "source": "ReplenishReport",
            "target": "X_M_Movement",
            "value": 1.5
        },
        {
            "source": "MExpenseType",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "MMatchInv",
            "target": "X_C_InvoiceLine",
            "value": 2.0
        },
        {
            "source": "MSLACriteria",
            "target": "CompiereSystemException",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "X_C_PaymentProcessor",
            "value": 4.0
        },
        {
            "source": "ComponentProduct",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MScheduler",
            "target": "MSchedulerPara",
            "value": 6.0
        },
        {
            "source": "WebDoc",
            "target": "WebDoc",
            "value": 8.0
        },
        {
            "source": "WebDoc",
            "target": "link",
            "value": 2.0
        },
        {
            "source": "MBankStatementLine",
            "target": "X_C_Payment",
            "value": 3.0
        },
        {
            "source": "MCommissionAmt",
            "target": "MCommissionDetail",
            "value": 0.5
        },
        {
            "source": "MCStageElement",
            "target": "X_CM_CStage_Element",
            "value": 3.0
        },
        {
            "source": "ScheduleUtil",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "DistributionRun",
            "target": "X_T_DistributionRunDetail",
            "value": 11.0
        },
        {
            "source": "MProjectType",
            "target": "MProjectTypePhase",
            "value": 0.5
        },
        {
            "source": "MPrintColor",
            "target": "X_AD_PrintColor",
            "value": 2.0
        },
        {
            "source": "MJournal",
            "target": "X_C_ValidCombination",
            "value": 19.5
        },
        {
            "source": "MMedia",
            "target": "X_CM_MediaDeploy",
            "value": 1.0
        },
        {
            "source": "MAllocationHdr",
            "target": "MBPartner",
            "value": 2.5
        },
        {
            "source": "MMovementLine",
            "target": "X_M_Product",
            "value": 0.5
        },
        {
            "source": "ImportLocator",
            "target": "MLocator",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "X_C_Order",
            "value": 12.5
        },
        {
            "source": "MRequisitionLine",
            "target": "Trx",
            "value": 0.5
        },
        {
            "source": "MContainer",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "InvoiceNGL",
            "value": 1.5
        },
        {
            "source": "MNewsChannel",
            "target": "MNewsChannel",
            "value": 0.5
        },
        {
            "source": "ColumnEncryption",
            "target": "FieldType",
            "value": 1.0
        },
        {
            "source": "ElementAttributes",
            "target": "Attributes",
            "value": 2.0
        },
        {
            "source": "MCost",
            "target": "MOrg",
            "value": 0.5
        },
        {
            "source": "InOutGenerate",
            "target": "X_M_Product",
            "value": 1.0
        },
        {
            "source": "h1",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MDocAction",
            "target": "MDocActionRule",
            "value": 3.5
        },
        {
            "source": "MWFProcess",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "MPaymentProcessor",
            "target": "MPaymentProcessor",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "DistributionRun",
            "target": "X_C_DocType",
            "value": 4.5
        },
        {
            "source": "MPrintFormatItem",
            "target": "X_AD_PrintFormatItem",
            "value": 2.0
        },
        {
            "source": "VolumeTest",
            "target": "X_C_Location",
            "value": 1.5
        },
        {
            "source": "MGoal",
            "target": "MColorSchema",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_M_PriceList",
            "value": 1.0
        },
        {
            "source": "EntityTypeRegister",
            "target": "X_AD_System",
            "value": 1.5
        },
        {
            "source": "MCStage",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MAchievement",
            "target": "MMeasure",
            "value": 0.5
        },
        {
            "source": "Ctx",
            "target": "Evaluatee",
            "value": 2.0
        },
        {
            "source": "MInvoiceSchedule",
            "target": "X_C_InvoiceSchedule",
            "value": 10.0
        },
        {
            "source": "h1",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MCostDetail",
            "target": "MAcctSchema",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_M_RequisitionLine",
            "value": 10.0
        },
        {
            "source": "ViewImportFromDB",
            "target": "Env",
            "value": 1.0
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "MTimeExpense",
            "value": 1.0
        },
        {
            "source": "MDunningRun",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "MResolution",
            "value": 0.5
        },
        {
            "source": "CalloutOrder",
            "target": "MUser",
            "value": 0.5
        },
        {
            "source": "MScheduler",
            "target": "MSchedulerLog",
            "value": 0.5
        },
        {
            "source": "MLandedCost",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MInOutConfirm",
            "target": "X_C_InvoiceLine",
            "value": 0.5
        },
        {
            "source": "ProjectPhaseGenOrder",
            "target": "MProjectPhase",
            "value": 0.5
        },
        {
            "source": "MMovementConfirm",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MBPBankAccount",
            "target": "X_C_BPartner",
            "value": 1.5
        },
        {
            "source": "ReplenishReport",
            "target": "MOrderLine",
            "value": 1.5
        },
        {
            "source": "WebProjectDeploy",
            "target": "MWebProject",
            "value": 1.5
        },
        {
            "source": "GridWindow",
            "target": "Ctx",
            "value": 1.5
        },
        {
            "source": "VolumeTest",
            "target": "X_C_DocType",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "X_M_Transaction",
            "value": 1.0
        },
        {
            "source": "MRequisition",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "OrderPOCreate",
            "target": "X_C_OrderLine",
            "value": 7.0
        },
        {
            "source": "MAllocationHdr",
            "target": "X_C_BPartner",
            "value": 1.5
        },
        {
            "source": "MAllocationLine",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "DistributionCreate",
            "target": "X_M_DistributionListLine",
            "value": 3.5
        },
        {
            "source": "MWFEventAudit",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "Ctx",
            "value": 5.0
        },
        {
            "source": "MReportColumnSet",
            "target": "MReportColumnSet",
            "value": 1.0
        },
        {
            "source": "body",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MStatus",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MExpenseType",
            "target": "X_S_ExpenseType",
            "value": 4.0
        },
        {
            "source": "MTreeNodeCMT",
            "target": "X_AD_TreeNodeCMT",
            "value": 2.0
        },
        {
            "source": "ImportAccount",
            "target": "DB",
            "value": 14.0
        },
        {
            "source": "RfQResponseRank",
            "target": "MRfQResponseLineQty",
            "value": 2.0
        },
        {
            "source": "MProductPO",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MAchievement",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MTax",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "TranslationMgr",
            "target": "Util",
            "value": 1.5
        },
        {
            "source": "MProjectTypeTask",
            "target": "X_C_Task",
            "value": 3.0
        },
        {
            "source": "AssetDelivery",
            "target": "X_AD_User",
            "value": 5.0
        },
        {
            "source": "MPaymentAllocate",
            "target": "Ctx",
            "value": 2.5
        },
        {
            "source": "MMovementConfirm",
            "target": "X_M_Inventory",
            "value": 5.0
        },
        {
            "source": "MAttributeSetInstance",
            "target": "X_M_AttributeSet",
            "value": 2.0
        },
        {
            "source": "MCommissionAmt",
            "target": "X_C_CommissionLine",
            "value": 2.0
        },
        {
            "source": "PaymentProcessor",
            "target": "PaymentProcessor",
            "value": 1.5
        },
        {
            "source": "ImportGLJournal",
            "target": "X_GL_JournalLine",
            "value": 4.0
        },
        {
            "source": "MCommissionRun",
            "target": "X_C_CommissionAmt",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_M_InOutConfirm",
            "value": 3.0
        },
        {
            "source": "MPriceListVersion",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "MAlert",
            "target": "X_AD_Alert",
            "value": 5.5
        },
        {
            "source": "MAllocationHdr",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MChangeRequest",
            "target": "X_M_BOM",
            "value": 1.0
        },
        {
            "source": "MReportSource",
            "target": "X_PA_ReportSource",
            "value": 9.0
        },
        {
            "source": "MForm",
            "target": "MFormAccess",
            "value": 0.5
        },
        {
            "source": "TranslationMgr",
            "target": "TranslationHandler",
            "value": 2.0
        },
        {
            "source": "MTree",
            "target": "X_AD_Tree",
            "value": 2.0
        },
        {
            "source": "HtmlCode",
            "target": "GenericElement",
            "value": 2.0
        },
        {
            "source": "DistributionRun",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MPayment",
            "target": "MInvoice",
            "value": 2.0
        },
        {
            "source": "MContainer",
            "target": "MTemplate",
            "value": 1.5
        },
        {
            "source": "MProduct",
            "target": "X_C_AcctSchema",
            "value": 0.5
        },
        {
            "source": "MInventoryLine",
            "target": "X_M_Product",
            "value": 1.0
        },
        {
            "source": "WebProjectDeploy",
            "target": "CacheHandler",
            "value": 3.5
        },
        {
            "source": "MYear",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "MWorkflow",
            "target": "MWFNode",
            "value": 6.5
        },
        {
            "source": "MInventory",
            "target": "X_M_Storage",
            "value": 6.0
        },
        {
            "source": "MRequestProcessorLog",
            "target": "X_R_RequestProcessor",
            "value": 0.5
        },
        {
            "source": "DeliveryAccuracy",
            "target": "X_PA_SLA_Measure",
            "value": 2.5
        },
        {
            "source": "MJournal",
            "target": "X_C_Period",
            "value": 3.5
        },
        {
            "source": "MLead",
            "target": "X_AD_User",
            "value": 8.0
        },
        {
            "source": "MAssignmentSlot",
            "target": "MResourceAssignment",
            "value": 1.0
        },
        {
            "source": "MRequest",
            "target": "X_W_Store",
            "value": 1.0
        },
        {
            "source": "MInvoiceBatch",
            "target": "MInvoiceBatchLine",
            "value": 0.5
        },
        {
            "source": "GwtTest",
            "target": "VO",
            "value": 0.5
        },
        {
            "source": "MLandedCostAllocation",
            "target": "X_C_LandedCostAllocation",
            "value": 5.0
        },
        {
            "source": "MTimeExpenseLine",
            "target": "MResourceAssignment",
            "value": 1.5
        },
        {
            "source": "MStore",
            "target": "Server",
            "value": 0.5
        },
        {
            "source": "RfQCreateSO",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "TranslationMgr",
            "target": "MLanguage",
            "value": 1.0
        },
        {
            "source": "MJournal",
            "target": "X_GL_JournalLine",
            "value": 7.5
        },
        {
            "source": "FinStatement",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "X_C_Lead",
            "value": 67.5
        },
        {
            "source": "MAsset",
            "target": "MAsset",
            "value": 7.5
        },
        {
            "source": "MAllocationHdr",
            "target": "X_C_PaySelectionLine",
            "value": 0.5
        },
        {
            "source": "MPriceList",
            "target": "X_M_PriceList_Version",
            "value": 0.5
        },
        {
            "source": "MInvoiceTax",
            "target": "X_C_InvoiceLine",
            "value": 2.5
        },
        {
            "source": "WebProjectDeploy",
            "target": "X_CM_WebProject",
            "value": 0.5
        },
        {
            "source": "MProductPrice",
            "target": "X_M_ProductPrice",
            "value": 8.5
        },
        {
            "source": "PP_PayPal",
            "target": "PP_PayPal",
            "value": 1.5
        },
        {
            "source": "MNewsChannel",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "MOrder",
            "value": 2.0
        },
        {
            "source": "CostUpdate",
            "target": "X_M_CostUpdateLine",
            "value": 1.5
        },
        {
            "source": "MBPartnerLocation",
            "target": "MLocation",
            "value": 1.5
        },
        {
            "source": "MRfQLine",
            "target": "X_C_RfQ",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "X_AD_User",
            "value": 4.5
        },
        {
            "source": "MRecurring",
            "target": "X_C_Recurring_Run",
            "value": 2.0
        },
        {
            "source": "MSequence",
            "target": "X_AD_Sequence",
            "value": 2.0
        },
        {
            "source": "ViewCreate",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MTableIndex",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "form",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "Tax",
            "target": "MLocation",
            "value": 1.0
        },
        {
            "source": "MMatchInv",
            "target": "MInvoiceLine",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MProduct",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MProductCategoryAcct",
            "target": "MCostElement",
            "value": 0.5
        },
        {
            "source": "FinStatement",
            "target": "MAcctSchema",
            "value": 1.5
        },
        {
            "source": "MProjectIssue",
            "target": "MStorage",
            "value": 0.5
        },
        {
            "source": "MProductCategory",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MOrderLine",
            "target": "X_M_Storage",
            "value": 1.0
        },
        {
            "source": "GridField",
            "target": "Ctx",
            "value": 7.0
        },
        {
            "source": "WebInfo",
            "target": "MCommissionRun",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_M_Product_PO",
            "value": 2.0
        },
        {
            "source": "MCostUpdateLine",
            "target": "X_M_CostUpdateLine",
            "value": 2.5
        },
        {
            "source": "MProduct",
            "target": "X_A_Asset_Group",
            "value": 0.5
        },
        {
            "source": "MCommission",
            "target": "MCommissionLine",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MBankStatementLine",
            "target": "MInvoice",
            "value": 0.5
        },
        {
            "source": "GwtServerUtil",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MCashLine",
            "target": "MCashBook",
            "value": 1.5
        },
        {
            "source": "MProduct",
            "target": "MUOM",
            "value": 1.0
        },
        {
            "source": "MAsset",
            "target": "X_M_ProductDownload",
            "value": 0.5
        },
        {
            "source": "MDunningRunLine",
            "target": "MDunningRunEntry",
            "value": 1.5
        },
        {
            "source": "ImportOrder",
            "target": "MBPartnerLocation",
            "value": 0.5
        },
        {
            "source": "WebProjectDeploy",
            "target": "MMediaServer",
            "value": 1.0
        },
        {
            "source": "MPeriod",
            "target": "X_C_Year",
            "value": 1.0
        },
        {
            "source": "MInOutConfirm",
            "target": "X_M_Inventory",
            "value": 1.5
        },
        {
            "source": "ImportBPartner",
            "target": "DB",
            "value": 12.5
        },
        {
            "source": "WebDoc",
            "target": "GenericElement",
            "value": 0.5
        },
        {
            "source": "ExpenseSOrder",
            "target": "MOrderLine",
            "value": 3.0
        },
        {
            "source": "MigrateData",
            "target": "MUser",
            "value": 1.5
        },
        {
            "source": "MInOutLine",
            "target": "X_M_Product",
            "value": 2.5
        },
        {
            "source": "MDistributionRun",
            "target": "X_M_DistributionRun",
            "value": 2.5
        },
        {
            "source": "MAlert",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "WebProjectDeploy",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "MDiscountSchema",
            "target": "X_M_DiscountSchemaLine",
            "value": 1.0
        },
        {
            "source": "MProjectType",
            "target": "Query",
            "value": 2.0
        },
        {
            "source": "MPeriodControl",
            "target": "X_C_PeriodControl",
            "value": 6.5
        },
        {
            "source": "MAsset",
            "target": "X_AD_User",
            "value": 1.5
        },
        {
            "source": "MBPartnerInfo",
            "target": "Ctx",
            "value": 1.5
        },
        {
            "source": "MInvoice",
            "target": "X_C_CashLine",
            "value": 1.0
        },
        {
            "source": "VolumeTest",
            "target": "X_AD_User",
            "value": 1.0
        },
        {
            "source": "FTPClient",
            "target": "FTP",
            "value": 2.0
        },
        {
            "source": "AssetDelivery",
            "target": "X_AD_Client",
            "value": 2.0
        },
        {
            "source": "MSLAMeasure",
            "target": "X_PA_SLA_Measure",
            "value": 9.0
        },
        {
            "source": "ImportConversionRate",
            "target": "MConversionRate",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "Util",
            "value": 1.0
        },
        {
            "source": "RfQCreateSO",
            "target": "X_C_Order",
            "value": 3.0
        },
        {
            "source": "MInOutConfirm",
            "target": "MInvoice",
            "value": 2.0
        },
        {
            "source": "MAd",
            "target": "MAd",
            "value": 1.5
        },
        {
            "source": "MRfQTopicSubscriberOnly",
            "target": "X_C_RfQ_TopicSubscriberOnly",
            "value": 2.0
        },
        {
            "source": "MWarehousePrice",
            "target": "MWarehousePrice",
            "value": 1.5
        },
        {
            "source": "MUOM",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MResourceUnAvailable",
            "target": "X_S_ResourceUnAvailable",
            "value": 4.5
        },
        {
            "source": "GridField",
            "target": "MLookupFactory",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "X_C_PaySelection",
            "value": 0.5
        },
        {
            "source": "ImportPayment",
            "target": "DB",
            "value": 15.5
        },
        {
            "source": "MLead",
            "target": "MRequest",
            "value": 3.0
        },
        {
            "source": "MActivity",
            "target": "MAccount",
            "value": 0.5
        },
        {
            "source": "ReplenishReport",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "TableCreateColumns",
            "target": "X_AD_Element",
            "value": 2.5
        },
        {
            "source": "ViewImportFromDB",
            "target": "TableCreateColumns",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "X_C_BPartner",
            "value": 0.5
        },
        {
            "source": "MStatus",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MElementValue",
            "target": "X_C_ElementValue",
            "value": 2.0
        },
        {
            "source": "MBPBankAccount",
            "target": "CLogger",
            "value": 3.0
        },
        {
            "source": "ResultTableCellRenderer",
            "target": "ResultTableCellRenderer",
            "value": 0.5
        },
        {
            "source": "MInOutConfirm",
            "target": "MInvoiceLine",
            "value": 1.5
        },
        {
            "source": "MLoginMsgLog",
            "target": "X_AD_LoginMsg",
            "value": 0.5
        },
        {
            "source": "MWFNode",
            "target": "MWFNodePara",
            "value": 0.5
        },
        {
            "source": "ImportInOutConfirm",
            "target": "X_I_InOutLineConfirm",
            "value": 6.0
        },
        {
            "source": "SLAGoalProcess",
            "target": "MSLACriteria",
            "value": 0.5
        },
        {
            "source": "p",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MAttachment",
            "target": "X_AD_Attachment",
            "value": 2.0
        },
        {
            "source": "MCStageElement",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPaySchedule",
            "target": "MPaySchedule",
            "value": 0.5
        },
        {
            "source": "MultipartRequestEntity",
            "target": "RequestEntity",
            "value": 2.0
        },
        {
            "source": "MRequisitionLine",
            "target": "MRequisition",
            "value": 1.5
        },
        {
            "source": "GridField",
            "target": "GridFieldVO",
            "value": 3.0
        },
        {
            "source": "MWFNode",
            "target": "X_AD_Column",
            "value": 1.0
        },
        {
            "source": "hr",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MProject",
            "target": "MProjectLine",
            "value": 1.5
        },
        {
            "source": "RfQCreatePO",
            "target": "X_C_RfQResponse",
            "value": 4.5
        },
        {
            "source": "MSchedule",
            "target": "Env",
            "value": 2.5
        },
        {
            "source": "MTimeExpense",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MMovementConfirm",
            "target": "MInventoryLine",
            "value": 1.0
        },
        {
            "source": "ImportBPartner",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "MIndex",
            "target": "X_K_IndexLog",
            "value": 1.5
        },
        {
            "source": "MPriceListVersion",
            "target": "MProductPrice",
            "value": 0.5
        },
        {
            "source": "MMeasureCalc",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MAlertProcessor",
            "target": "X_AD_AlertProcessor",
            "value": 4.0
        },
        {
            "source": "MOrderLine",
            "target": "X_C_Currency",
            "value": 0.5
        },
        {
            "source": "MRfQResponseLineQty",
            "target": "X_C_RfQResponseLine",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "MWFEventAudit",
            "value": 3.0
        },
        {
            "source": "MInOutConfirm",
            "target": "X_M_InOutConfirm",
            "value": 24.5
        },
        {
            "source": "GridField",
            "target": "MPAttributeLookup",
            "value": 0.5
        },
        {
            "source": "ChangeLogProcess",
            "target": "MColumn",
            "value": 1.5
        },
        {
            "source": "MGoal",
            "target": "MGoalRestriction",
            "value": 0.5
        },
        {
            "source": "MProductCosting",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "RfQCopyLines",
            "target": "X_C_RfQLineQty",
            "value": 5.0
        },
        {
            "source": "MMediaServer",
            "target": "X_CM_Media_Server",
            "value": 15.0
        },
        {
            "source": "MTaxDeclaration",
            "target": "X_C_TaxDeclaration",
            "value": 4.0
        },
        {
            "source": "MCostDetail",
            "target": "MCostElement",
            "value": 10.5
        },
        {
            "source": "MInvoiceBatch",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_C_OrderLine",
            "value": 31.0
        },
        {
            "source": "MWorkflowProcessor",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MDistributionLine",
            "target": "X_GL_DistributionLine",
            "value": 32.5
        },
        {
            "source": "MWebProject",
            "target": "X_AD_Tree",
            "value": 2.0
        },
        {
            "source": "MAchievement",
            "target": "X_PA_Measure",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "MOrderLine",
            "value": 12.5
        },
        {
            "source": "MOrder",
            "target": "MOrg",
            "value": 0.5
        },
        {
            "source": "MInfoColumn",
            "target": "M_Element",
            "value": 0.5
        },
        {
            "source": "OFXFileBankStatementLoader",
            "target": "BankStatementLoaderInterface",
            "value": 2.0
        },
        {
            "source": "MAcctProcessor",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MCalendar",
            "target": "MCalendar",
            "value": 1.5
        },
        {
            "source": "MNewsItem",
            "target": "MNewsChannel",
            "value": 0.5
        },
        {
            "source": "SLACriteria",
            "target": "SLACriteria",
            "value": 1.0
        },
        {
            "source": "MGLCategory",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MAlertRule",
            "target": "X_AD_AlertRule",
            "value": 8.5
        },
        {
            "source": "MPaymentAllocate",
            "target": "MInvoice",
            "value": 2.0
        },
        {
            "source": "MAllocationHdr",
            "target": "MFactAcct",
            "value": 0.5
        },
        {
            "source": "MPeriod",
            "target": "MPeriod",
            "value": 7.5
        },
        {
            "source": "AllocationReset",
            "target": "MAllocationHdr",
            "value": 1.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_M_Product",
            "value": 0.5
        },
        {
            "source": "MBankAccount",
            "target": "X_C_BankAccount",
            "value": 6.0
        },
        {
            "source": "PostMethod",
            "target": "EntityEnclosingMethod",
            "value": 2.0
        },
        {
            "source": "DistributionRun",
            "target": "MDistributionRunDetail",
            "value": 9.0
        },
        {
            "source": "DocWorkflowManager",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "ImportPayment",
            "target": "X_I_Payment",
            "value": 26.5
        },
        {
            "source": "MCost",
            "target": "X_M_Product_PO",
            "value": 1.0
        },
        {
            "source": "MBank",
            "target": "X_C_Location",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "X_C_AcctSchema",
            "value": 2.0
        },
        {
            "source": "MTaxCategory",
            "target": "X_C_TaxCategory",
            "value": 2.5
        },
        {
            "source": "MInvoice",
            "target": "MMatchPO",
            "value": 0.5
        },
        {
            "source": "label",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MPayment",
            "target": "Ctx",
            "value": 4.0
        },
        {
            "source": "MRfQLineQty",
            "target": "X_C_RfQLine",
            "value": 0.5
        },
        {
            "source": "PriceListCreate",
            "target": "MPriceListVersion",
            "value": 1.5
        },
        {
            "source": "MMatchInv",
            "target": "MFactAcct",
            "value": 0.5
        },
        {
            "source": "MTreeNodePR",
            "target": "X_AD_TreeNodePR",
            "value": 2.0
        },
        {
            "source": "DunningPrint",
            "target": "Language",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "Util",
            "value": 1.5
        },
        {
            "source": "ImportOrder",
            "target": "X_I_Order",
            "value": 60.5
        },
        {
            "source": "MAssetGroup",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCounterCount",
            "target": "X_W_CounterCount",
            "value": 2.0
        },
        {
            "source": "MRfQResponseLine",
            "target": "MRfQLine",
            "value": 1.5
        },
        {
            "source": "MProject",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "ExpenseSOrder",
            "target": "X_C_OrderLine",
            "value": 5.0
        },
        {
            "source": "MDataMigration",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_C_Invoice",
            "value": 5.5
        },
        {
            "source": "MBankStatementLine",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MDistributionListLine",
            "target": "X_M_DistributionListLine",
            "value": 2.0
        },
        {
            "source": "MInOutConfirm",
            "target": "X_M_InOutLineConfirm",
            "value": 9.0
        },
        {
            "source": "MClickCount",
            "target": "X_W_Advertisement",
            "value": 1.0
        },
        {
            "source": "MProductPrice",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MBankStatement",
            "target": "X_C_BankStatement",
            "value": 33.5
        },
        {
            "source": "PriceListCreate",
            "target": "X_M_Product_PO",
            "value": 1.5
        },
        {
            "source": "hr",
            "target": "SinglePartElement",
            "value": 2.0
        },
        {
            "source": "MAttributeSetInstance",
            "target": "MAttributeSet",
            "value": 5.0
        },
        {
            "source": "MCost",
            "target": "X_M_Product_Category_Acct",
            "value": 3.0
        },
        {
            "source": "AllocationAuto",
            "target": "X_C_AllocationLine",
            "value": 1.5
        },
        {
            "source": "MCost",
            "target": "MCostDetail",
            "value": 0.5
        },
        {
            "source": "WebDoc",
            "target": "ConcreteElement",
            "value": 1.0
        },
        {
            "source": "MPeriodControl",
            "target": "X_C_Period",
            "value": 0.5
        },
        {
            "source": "MStore",
            "target": "X_W_Store",
            "value": 21.5
        },
        {
            "source": "MColorSchema",
            "target": "MColorSchema",
            "value": 2.5
        },
        {
            "source": "MProductBOM",
            "target": "X_M_Product_BOM",
            "value": 6.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "MDunningRunEntry",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_M_InOut",
            "value": 157.0
        },
        {
            "source": "CommissionCalc",
            "target": "Language",
            "value": 1.0
        },
        {
            "source": "MMovementLine",
            "target": "MMovement",
            "value": 1.5
        },
        {
            "source": "ReplicationLocal",
            "target": "ProcessInfo",
            "value": 8.5
        },
        {
            "source": "WebProjectDeploy",
            "target": "X_CM_Container",
            "value": 1.0
        },
        {
            "source": "MRfQ",
            "target": "TimeUtil",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "MOrder",
            "value": 59.0
        },
        {
            "source": "MWFProcess",
            "target": "MWFProcess",
            "value": 12.5
        },
        {
            "source": "MStore",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MInventory",
            "target": "NamePair",
            "value": 2.0
        },
        {
            "source": "ImportOrder",
            "target": "X_C_OrderLine",
            "value": 4.0
        },
        {
            "source": "MMatchPO",
            "target": "DB",
            "value": 4.0
        },
        {
            "source": "InvoiceNGL",
            "target": "MGLCategory",
            "value": 0.5
        },
        {
            "source": "ProjectGenOrder",
            "target": "X_C_OrderLine",
            "value": 1.0
        },
        {
            "source": "MWebProjectDomain",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MigrateData",
            "target": "MigrateData",
            "value": 1.5
        },
        {
            "source": "MRecurring",
            "target": "X_C_Invoice",
            "value": 1.0
        },
        {
            "source": "WebLogin",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_M_MatchPO",
            "value": 0.5
        },
        {
            "source": "MStorage",
            "target": "MLocator",
            "value": 0.5
        },
        {
            "source": "WebDoc",
            "target": "td",
            "value": 10.0
        },
        {
            "source": "MBPartner",
            "target": "MReturnPolicy",
            "value": 1.0
        },
        {
            "source": "AllocationAuto",
            "target": "X_C_PaySelectionLine",
            "value": 1.0
        },
        {
            "source": "ChangeLogProcess",
            "target": "MChangeLog",
            "value": 3.0
        },
        {
            "source": "MMatchInv",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "WebInfo",
            "target": "MRegistration",
            "value": 1.5
        },
        {
            "source": "MInvoice",
            "target": "X_M_InOutLine",
            "value": 3.0
        },
        {
            "source": "MValRule",
            "target": "MValRule",
            "value": 0.5
        },
        {
            "source": "MChat",
            "target": "GenericElement",
            "value": 0.5
        },
        {
            "source": "ImportBankStatement",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MComponentReg",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MSchedule",
            "target": "X_AD_Schedule",
            "value": 38.5
        },
        {
            "source": "MAssetDelivery",
            "target": "EMail",
            "value": 1.0
        },
        {
            "source": "MCurrency",
            "target": "X_C_Currency",
            "value": 2.0
        },
        {
            "source": "MCostQueue",
            "target": "MCostQueue",
            "value": 1.5
        },
        {
            "source": "MOrderLine",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MMailText",
            "target": "MMailText",
            "value": 9.0
        },
        {
            "source": "MAdvertisement",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "comment",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MLdapProcessor",
            "target": "MLdapAccess",
            "value": 1.0
        },
        {
            "source": "MBankAccount",
            "target": "X_C_Bank",
            "value": 0.5
        },
        {
            "source": "CostUpdate",
            "target": "MCostUpdateLine",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "MPaymentAllocate",
            "value": 0.5
        },
        {
            "source": "MLocator",
            "target": "X_M_Locator",
            "value": 2.0
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "CompiereSystemException",
            "value": 2.5
        },
        {
            "source": "CostUpdate",
            "target": "MCostElement",
            "value": 2.5
        },
        {
            "source": "MDunningRunLine",
            "target": "X_C_DunningRunLine",
            "value": 31.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_Order",
            "value": 18.5
        },
        {
            "source": "MProjectLine",
            "target": "X_C_ProjectPhase",
            "value": 0.5
        },
        {
            "source": "MProductDownload",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ImportOrder",
            "target": "DB",
            "value": 25.5
        },
        {
            "source": "MCtxArea",
            "target": "X_AD_CtxArea",
            "value": 3.0
        },
        {
            "source": "MDataMigrationEntry",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "X_C_Charge",
            "value": 0.5
        },
        {
            "source": "MInvoiceLine",
            "target": "X_M_Product",
            "value": 1.5
        },
        {
            "source": "MBPRelation",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "ImportBPartner",
            "target": "MLocation",
            "value": 2.0
        },
        {
            "source": "MAcctProcessor",
            "target": "MAcctProcessor",
            "value": 0.5
        },
        {
            "source": "GwtServerUtil",
            "target": "Ctx",
            "value": 2.0
        },
        {
            "source": "MDiscountSchemaBreak",
            "target": "MProductCategory",
            "value": 0.5
        },
        {
            "source": "MJournalBatch",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "ExpenseAPInvoice",
            "value": 1.0
        },
        {
            "source": "MRequest",
            "target": "X_M_ChangeRequest",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "DistributionRun",
            "target": "X_M_DistributionRunLine",
            "value": 4.0
        },
        {
            "source": "MWFActivity",
            "target": "MWFNodePara",
            "value": 7.5
        },
        {
            "source": "MLdapProcessor",
            "target": "MInterestArea",
            "value": 1.0
        },
        {
            "source": "MAttributeSetInstance",
            "target": "X_M_AttributeSetInstance",
            "value": 12.5
        },
        {
            "source": "MInOutConfirm",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWFEventAudit",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MProductDownload",
            "target": "X_M_ProductDownload",
            "value": 5.5
        },
        {
            "source": "MCostDetail",
            "target": "X_M_Product_Category_Acct",
            "value": 1.0
        },
        {
            "source": "MAlertRecipient",
            "target": "MAlertRecipient",
            "value": 1.0
        },
        {
            "source": "GridField",
            "target": "Env",
            "value": 2.5
        },
        {
            "source": "img",
            "target": "SinglePartElement",
            "value": 2.0
        },
        {
            "source": "DistributionRun",
            "target": "X_C_BPartner",
            "value": 1.0
        },
        {
            "source": "MMeasureCalc",
            "target": "X_PA_GoalRestriction",
            "value": 5.0
        },
        {
            "source": "GridField",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ColumnSync",
            "target": "Trx",
            "value": 1.0
        },
        {
            "source": "MFactAcct",
            "target": "X_Fact_Acct",
            "value": 4.5
        },
        {
            "source": "GwtTest",
            "target": "NamePair",
            "value": 2.5
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNodeCMT",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MLdapProcessor",
            "target": "X_AD_LdapAccess",
            "value": 4.0
        },
        {
            "source": "MRequisition",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "MAcctProcessor",
            "target": "X_C_AcctProcessor",
            "value": 6.0
        },
        {
            "source": "MLoginMsg",
            "target": "MLoginMsg",
            "value": 1.5
        },
        {
            "source": "BankStatementPayment",
            "target": "X_I_BankStatement",
            "value": 4.0
        },
        {
            "source": "RModel",
            "target": "RModel",
            "value": 2.5
        },
        {
            "source": "MBankStatementLine",
            "target": "MBankStatementLine",
            "value": 4.0
        },
        {
            "source": "CostUpdate",
            "target": "MCostUpdate",
            "value": 0.5
        },
        {
            "source": "MAttribute",
            "target": "X_M_Attribute",
            "value": 9.5
        },
        {
            "source": "MDunning",
            "target": "X_C_Dunning",
            "value": 2.0
        },
        {
            "source": "MNote",
            "target": "X_AD_Note",
            "value": 2.0
        },
        {
            "source": "form",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "CostUpdate",
            "target": "MAcctSchema",
            "value": 0.5
        },
        {
            "source": "CommissionCalc",
            "target": "MCommissionAmt",
            "value": 1.0
        },
        {
            "source": "ReplicationRemote",
            "target": "ReplicationRemote",
            "value": 4.0
        },
        {
            "source": "MOrder",
            "target": "X_M_InOutLine",
            "value": 5.5
        },
        {
            "source": "DocWorkflowManager",
            "target": "ProcessInfo",
            "value": 1.5
        },
        {
            "source": "EntityTypeRegister",
            "target": "X_AD_EntityType",
            "value": 8.5
        },
        {
            "source": "TreeMaintenance",
            "target": "MTree",
            "value": 1.5
        },
        {
            "source": "ImportConversionRate",
            "target": "X_I_Conversion_Rate",
            "value": 9.5
        },
        {
            "source": "MTimeExpense",
            "target": "X_S_TimeExpense",
            "value": 16.0
        },
        {
            "source": "MInvoice",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MWFActivity",
            "target": "MPInstance",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "X_C_BPartner",
            "value": 5.5
        },
        {
            "source": "MWFNode",
            "target": "MWFNodeNext",
            "value": 2.0
        },
        {
            "source": "MPaySelectionLine",
            "target": "MPaySelectionLine",
            "value": 2.0
        },
        {
            "source": "b",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "ViewImportFromDB",
            "target": "X_AD_ViewComponent",
            "value": 4.5
        },
        {
            "source": "CostUpdate",
            "target": "Trx",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "MBPartner",
            "value": 5.5
        },
        {
            "source": "MColumn",
            "target": "X_AD_Column",
            "value": 2.0
        },
        {
            "source": "MOrderLine",
            "target": "X_C_Charge",
            "value": 0.5
        },
        {
            "source": "ChangeVO",
            "target": "ResponseVO",
            "value": 2.0
        },
        {
            "source": "CacheHandler",
            "target": "CacheHandler",
            "value": 4.5
        },
        {
            "source": "MProductCategory",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "ImportInvoice",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "OrderPOCreate",
            "target": "MOrder",
            "value": 5.5
        },
        {
            "source": "MAllocationHdr",
            "target": "X_C_AllocationLine",
            "value": 10.5
        },
        {
            "source": "MMatchInv",
            "target": "MInOutLine",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "ProcessInfo",
            "value": 1.5
        },
        {
            "source": "ImportBankStatement",
            "target": "X_C_BankAccount",
            "value": 1.5
        },
        {
            "source": "MProjectPhase",
            "target": "X_C_Project",
            "value": 0.5
        },
        {
            "source": "MDistribution",
            "target": "MDistributionLine",
            "value": 6.0
        },
        {
            "source": "MBank",
            "target": "CLogger",
            "value": 2.0
        },
        {
            "source": "TranslationMgr",
            "target": "TranslationMgr",
            "value": 2.5
        },
        {
            "source": "MMeasure",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "PaymentProcessor",
            "target": "CLogger",
            "value": 2.0
        },
        {
            "source": "CommissionCalc",
            "target": "X_C_CommissionLine",
            "value": 7.5
        },
        {
            "source": "VolumeTest",
            "target": "VolumeTest",
            "value": 2.0
        },
        {
            "source": "MWorkflowProcessorLog",
            "target": "CompiereProcessorLog",
            "value": 2.0
        },
        {
            "source": "Aging",
            "target": "MAging",
            "value": 1.0
        },
        {
            "source": "ExpenseSOrder",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MLandedCostAllocation",
            "target": "MLandedCostAllocation",
            "value": 1.0
        },
        {
            "source": "CalloutOrder",
            "target": "CalloutOrder",
            "value": 4.5
        },
        {
            "source": "MMedia",
            "target": "MAttachment",
            "value": 1.5
        },
        {
            "source": "MProductDownload",
            "target": "MProductDownload",
            "value": 1.0
        },
        {
            "source": "ExpectContinueMethod",
            "target": "HttpMethodBase",
            "value": 2.0
        },
        {
            "source": "ImportLocator",
            "target": "X_I_Locator",
            "value": 5.0
        },
        {
            "source": "MResource",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "MRequisitionLine",
            "target": "X_C_Charge",
            "value": 0.5
        },
        {
            "source": "ImportBPartner",
            "target": "X_AD_User",
            "value": 13.0
        },
        {
            "source": "MCash",
            "target": "Msg",
            "value": 3.0
        },
        {
            "source": "ImportContact",
            "target": "MLead",
            "value": 1.5
        },
        {
            "source": "MPayment",
            "target": "MCurrency",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "MLocation",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MAllocationLine",
            "value": 1.0
        },
        {
            "source": "MWorkflowAccess",
            "target": "X_AD_Workflow_Access",
            "value": 3.5
        },
        {
            "source": "MAcctProcessorLog",
            "target": "X_C_AcctProcessorLog",
            "value": 3.0
        },
        {
            "source": "ExpenseSOrder",
            "target": "X_S_TimeExpenseLine",
            "value": 18.5
        },
        {
            "source": "MReportLineSet",
            "target": "MReportLineSet",
            "value": 1.0
        },
        {
            "source": "MWFEventAudit",
            "target": "MWFNode",
            "value": 1.0
        },
        {
            "source": "MAdvertisement",
            "target": "X_W_Advertisement",
            "value": 5.0
        },
        {
            "source": "MAchievement",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MProjectTask",
            "target": "X_C_ProjectPhase",
            "value": 0.5
        },
        {
            "source": "OFXFileBankStatementLoader",
            "target": "MBankStatementLoader",
            "value": 1.0
        },
        {
            "source": "VolumeTest",
            "target": "MLocation",
            "value": 0.5
        },
        {
            "source": "MOrderTax",
            "target": "X_C_OrderTax",
            "value": 11.5
        },
        {
            "source": "DistributionRun",
            "target": "X_C_OrderLine",
            "value": 1.0
        },
        {
            "source": "MRfQLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "PP_PayFlowPro",
            "target": "PP_PayFlowPro",
            "value": 0.5
        },
        {
            "source": "MMatchPO",
            "target": "X_C_OrderLine",
            "value": 16.5
        },
        {
            "source": "MWikiToken",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MCommissionRun",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MMediaDeploy",
            "target": "X_CM_Media",
            "value": 0.5
        },
        {
            "source": "DunningPrint",
            "target": "X_C_BPartner",
            "value": 3.5
        },
        {
            "source": "MInOutLineMA",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "MTimeExpenseLine",
            "target": "Trx",
            "value": 0.5
        },
        {
            "source": "MBOM",
            "target": "CLogger",
            "value": 2.0
        },
        {
            "source": "WebLogin",
            "target": "X_C_Bank",
            "value": 1.0
        },
        {
            "source": "DistributionCreate",
            "target": "X_M_DistributionList",
            "value": 0.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "X_AD_User",
            "value": 1.5
        },
        {
            "source": "ImportContact",
            "target": "X_I_Contact",
            "value": 11.5
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "X_C_InvoiceLine",
            "value": 3.5
        },
        {
            "source": "MInvoice",
            "target": "X_C_InvoiceBatchLine",
            "value": 7.0
        },
        {
            "source": "MCash",
            "target": "MPayment",
            "value": 2.5
        },
        {
            "source": "ReplicationLocal",
            "target": "CCachedRowSet",
            "value": 0.5
        },
        {
            "source": "MCharge",
            "target": "MCharge",
            "value": 0.5
        },
        {
            "source": "TranslationHandler",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "MStorage",
            "value": 1.0
        },
        {
            "source": "MJournalLine",
            "target": "X_C_ValidCombination",
            "value": 1.5
        },
        {
            "source": "MRequisition",
            "target": "X_M_RequisitionLine",
            "value": 5.0
        },
        {
            "source": "MMovementLine",
            "target": "X_M_MovementLine",
            "value": 14.5
        },
        {
            "source": "ExpenseSOrder",
            "target": "MTimeExpenseLine",
            "value": 1.0
        },
        {
            "source": "GridField",
            "target": "GridField",
            "value": 26.0
        },
        {
            "source": "ViewImportFromDB",
            "target": "X_AD_ViewColumn",
            "value": 2.5
        },
        {
            "source": "MDunningRun",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWorkflow",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MOrderLine",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "DistributionRun",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MJournal",
            "target": "MJournalLine",
            "value": 2.0
        },
        {
            "source": "Tax",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MMovementLineConfirm",
            "target": "X_M_MovementLineConfirm",
            "value": 12.0
        },
        {
            "source": "MJournal",
            "target": "X_C_Activity",
            "value": 1.0
        },
        {
            "source": "ElementAttributes",
            "target": "GenericElement",
            "value": 2.0
        },
        {
            "source": "MInOut",
            "target": "MProduct",
            "value": 2.5
        },
        {
            "source": "DeliveryAccuracy",
            "target": "MSLAGoal",
            "value": 0.5
        },
        {
            "source": "LoadBankStatement",
            "target": "MBankStatementLoader",
            "value": 4.5
        },
        {
            "source": "MUOMConversion",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "CommissionCalc",
            "target": "MCommissionDetail",
            "value": 1.5
        },
        {
            "source": "MBPartnerLocation",
            "target": "X_C_BPartner_Location",
            "value": 7.5
        },
        {
            "source": "MProductLocator",
            "target": "X_M_ProductLocator",
            "value": 3.0
        },
        {
            "source": "MWFProcess",
            "target": "DocAction",
            "value": 1.0
        },
        {
            "source": "WebUser",
            "target": "X_C_BP_BankAccount",
            "value": 1.0
        },
        {
            "source": "h2",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MLead",
            "target": "X_C_Project",
            "value": 7.0
        },
        {
            "source": "AcctSchemaDefaultCopy",
            "target": "CompiereSystemException",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "MInOutLine",
            "value": 7.5
        },
        {
            "source": "MWorkflowProcessorLog",
            "target": "X_AD_WorkflowProcessorLog",
            "value": 3.5
        },
        {
            "source": "VolumeTest",
            "target": "MBPartner",
            "value": 1.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "X_C_BPartner_Location",
            "value": 2.0
        },
        {
            "source": "PriceListCreate",
            "target": "DB",
            "value": 4.5
        },
        {
            "source": "MOrder",
            "target": "Msg",
            "value": 3.5
        },
        {
            "source": "MInOutConfirm",
            "target": "X_C_DocType",
            "value": 2.0
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "Ctx",
            "value": 2.0
        },
        {
            "source": "ImportGLJournal",
            "target": "X_I_GLJournal",
            "value": 25.5
        },
        {
            "source": "ComponentProduct",
            "target": "X_M_ProductDownload",
            "value": 1.5
        },
        {
            "source": "CostUpdate",
            "target": "X_M_Product",
            "value": 0.5
        },
        {
            "source": "i",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "DunningPrint",
            "target": "X_C_DunningRun",
            "value": 1.0
        },
        {
            "source": "MStore",
            "target": "X_W_MailMsg",
            "value": 1.5
        },
        {
            "source": "ImportGLJournal",
            "target": "MJournalLine",
            "value": 2.5
        },
        {
            "source": "MHierarchy",
            "target": "X_PA_Hierarchy",
            "value": 6.0
        },
        {
            "source": "MWorkflow",
            "target": "StateEngine",
            "value": 2.5
        },
        {
            "source": "MChangeLog",
            "target": "X_AD_ChangeLog",
            "value": 2.0
        },
        {
            "source": "MComponentRegUpdate",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ReplenishReport",
            "target": "Msg",
            "value": 1.5
        },
        {
            "source": "MCost",
            "target": "X_M_Product_Costing",
            "value": 0.5
        },
        {
            "source": "MCostQueue",
            "target": "MCost",
            "value": 0.5
        },
        {
            "source": "MJournal",
            "target": "X_C_Campaign",
            "value": 1.0
        },
        {
            "source": "MBOMProduct",
            "target": "X_M_BOM",
            "value": 2.0
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "MInvoiceLine",
            "value": 2.5
        },
        {
            "source": "ViewImportFromDB",
            "target": "ViewImportFromDB",
            "value": 2.5
        },
        {
            "source": "ImpFormat",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MAlertProcessorLog",
            "target": "X_AD_AlertProcessor",
            "value": 0.5
        },
        {
            "source": "MContainerElement",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWFNodePara",
            "target": "MWFNodePara",
            "value": 2.0
        },
        {
            "source": "PeriodControlStatus",
            "target": "CacheMgt",
            "value": 2.0
        },
        {
            "source": "MWFResponsible",
            "target": "MWFResponsible",
            "value": 1.0
        },
        {
            "source": "MAllocationHdr",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "ComponentProduct",
            "target": "MProductPrice",
            "value": 1.0
        },
        {
            "source": "MRequisitionLine",
            "target": "Ctx",
            "value": 2.0
        },
        {
            "source": "MCashBook",
            "target": "X_C_CashBook",
            "value": 3.0
        },
        {
            "source": "InOutGenerate",
            "target": "MWarehouse",
            "value": 0.5
        },
        {
            "source": "MCashLine",
            "target": "X_C_Order",
            "value": 1.5
        },
        {
            "source": "TableCreateColumns",
            "target": "MColumn",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "MRfQResponseLine",
            "value": 3.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "MPayment",
            "value": 9.5
        },
        {
            "source": "MDistributionList",
            "target": "X_M_DistributionList",
            "value": 4.0
        },
        {
            "source": "MRequestProcessor",
            "target": "MRequestProcessorLog",
            "value": 0.5
        },
        {
            "source": "MRequestAction",
            "target": "X_R_Request",
            "value": 0.5
        },
        {
            "source": "MReportSource",
            "target": "MReportSource",
            "value": 0.5
        },
        {
            "source": "MBPartnerInfo",
            "target": "X_RV_BPartner",
            "value": 2.0
        },
        {
            "source": "MDistributionRunLine",
            "target": "MDistributionRunLine",
            "value": 3.0
        },
        {
            "source": "RModel",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MAsset",
            "target": "MInOutLine",
            "value": 0.5
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "CompiereUserException",
            "value": 3.5
        },
        {
            "source": "BankStatementPayment",
            "target": "X_C_Invoice",
            "value": 2.5
        },
        {
            "source": "MGoal",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "LanguageMaintenance",
            "target": "MLanguage",
            "value": 2.5
        },
        {
            "source": "WebUser",
            "target": "MUser",
            "value": 7.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_BP_BankAccount",
            "value": 1.0
        },
        {
            "source": "MInventory",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "ImportRequest",
            "target": "X_I_Request",
            "value": 2.5
        },
        {
            "source": "MBPartner",
            "target": "X_C_BP_Group",
            "value": 10.0
        },
        {
            "source": "MAttributeUse",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCostUpdate",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "TreeMaintenance",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MMeasure",
            "target": "MMeasure",
            "value": 4.0
        },
        {
            "source": "MContactInterest",
            "target": "X_R_InterestArea",
            "value": 0.5
        },
        {
            "source": "MPeriod",
            "target": "X_C_Period",
            "value": 14.5
        },
        {
            "source": "ResultTableCellEditor",
            "target": "RColumn",
            "value": 2.0
        },
        {
            "source": "MProductCategoryAcct",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMailText",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "ComponentProduct",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "X_M_InOutLine",
            "value": 1.5
        },
        {
            "source": "BOMValidate",
            "target": "X_M_BOM",
            "value": 2.5
        },
        {
            "source": "ScheduleUtil",
            "target": "Language",
            "value": 5.0
        },
        {
            "source": "MWorkflow",
            "target": "X_AD_WF_Node",
            "value": 17.0
        },
        {
            "source": "MAllocationLine",
            "target": "MAllocationLine",
            "value": 3.5
        },
        {
            "source": "MRfQResponseLineQty",
            "target": "X_C_RfQLineQty",
            "value": 0.5
        },
        {
            "source": "MCashLine",
            "target": "X_C_Cash",
            "value": 3.0
        },
        {
            "source": "MClick",
            "target": "X_W_Click",
            "value": 6.5
        },
        {
            "source": "OrderPOCreate",
            "target": "MOrderLine",
            "value": 3.0
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "ValueNamePair",
            "value": 0.5
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "MPaySelectionCheck",
            "value": 2.5
        },
        {
            "source": "TreeMaintenance",
            "target": "X_AD_Tree",
            "value": 5.0
        },
        {
            "source": "MWorkflow",
            "target": "Env",
            "value": 1.5
        },
        {
            "source": "MBOMAlternative",
            "target": "X_M_BOMAlternative",
            "value": 2.0
        },
        {
            "source": "MAttributeInstance",
            "target": "X_M_AttributeInstance",
            "value": 9.0
        },
        {
            "source": "MRecurringRun",
            "target": "X_C_Recurring",
            "value": 1.0
        },
        {
            "source": "MWFNodeNext",
            "target": "MWFNodeNext",
            "value": 2.5
        },
        {
            "source": "VolumeTest",
            "target": "MProductPrice",
            "value": 1.0
        },
        {
            "source": "MPeriod",
            "target": "X_C_AcctSchema",
            "value": 2.5
        },
        {
            "source": "MFactAcct",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_PaySelectionCheck",
            "value": 38.5
        },
        {
            "source": "MCostDetail",
            "target": "X_M_Product",
            "value": 1.0
        },
        {
            "source": "InvoiceNGL",
            "target": "X_GL_Category",
            "value": 0.5
        },
        {
            "source": "MBPRelation",
            "target": "X_C_BP_Relation",
            "value": 2.0
        },
        {
            "source": "MWarehousePrice",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "HtmlCode",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MMailText",
            "target": "MBPartner",
            "value": 1.5
        },
        {
            "source": "MComponentReg",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MValRule",
            "target": "X_AD_Val_Rule",
            "value": 2.0
        },
        {
            "source": "DistributionRun",
            "target": "X_M_DistributionRun",
            "value": 3.5
        },
        {
            "source": "WebProjectDeploy",
            "target": "X_AD_TreeNodeCMS",
            "value": 1.0
        },
        {
            "source": "MScheduler",
            "target": "X_AD_Scheduler",
            "value": 11.0
        },
        {
            "source": "TranslationMgr",
            "target": "Element",
            "value": 3.0
        },
        {
            "source": "MProject",
            "target": "MProject",
            "value": 2.5
        },
        {
            "source": "MBPartnerLocation",
            "target": "MBPartnerLocation",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "MDocType",
            "value": 1.5
        },
        {
            "source": "form",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "WebDoc",
            "target": "a",
            "value": 1.0
        },
        {
            "source": "MMovementConfirm",
            "target": "X_M_InventoryLine",
            "value": 2.0
        },
        {
            "source": "MAttributeSet",
            "target": "MAttribute",
            "value": 0.5
        },
        {
            "source": "InOutGenerate",
            "target": "X_C_Order",
            "value": 7.5
        },
        {
            "source": "InOutGenerate",
            "target": "X_AD_Client",
            "value": 1.0
        },
        {
            "source": "Tax",
            "target": "X_C_Tax",
            "value": 14.0
        },
        {
            "source": "MRequestUpdate",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "MInventory",
            "target": "X_M_Warehouse",
            "value": 0.5
        },
        {
            "source": "MBankAccount",
            "target": "MBankAccount",
            "value": 1.0
        },
        {
            "source": "MMeasure",
            "target": "MGoal",
            "value": 2.5
        },
        {
            "source": "MContainer",
            "target": "X_CM_Container",
            "value": 21.0
        },
        {
            "source": "MInvoiceSchedule",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "MForm",
            "target": "X_AD_Form",
            "value": 2.0
        },
        {
            "source": "MRequisition",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "ImportConversionRate",
            "target": "DB",
            "value": 7.5
        },
        {
            "source": "MMatchPO",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ProjectIssue",
            "target": "X_S_TimeExpense",
            "value": 1.0
        },
        {
            "source": "MCommissionAmt",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInterestArea",
            "target": "MInterestArea",
            "value": 1.0
        },
        {
            "source": "MScheduler",
            "target": "FieldType",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "X_M_BOMProduct",
            "value": 1.5
        },
        {
            "source": "RfQCopyLines",
            "target": "MRfQ",
            "value": 1.0
        },
        {
            "source": "MRequisition",
            "target": "MRequisitionLine",
            "value": 1.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_AllocationLine",
            "value": 2.0
        },
        {
            "source": "FileUpload",
            "target": "form",
            "value": 2.0
        },
        {
            "source": "MCost",
            "target": "MAcctSchema",
            "value": 3.0
        },
        {
            "source": "DunningPrint",
            "target": "X_R_MailText",
            "value": 0.5
        },
        {
            "source": "MProjectTypePhase",
            "target": "X_C_Phase",
            "value": 3.5
        },
        {
            "source": "MMatchInv",
            "target": "MMatchInv",
            "value": 2.0
        },
        {
            "source": "MOrderLine",
            "target": "MOrderTax",
            "value": 1.0
        },
        {
            "source": "MComponentCreate",
            "target": "X_AD_ComponentReg",
            "value": 0.5
        },
        {
            "source": "MProject",
            "target": "X_C_ProjectLine",
            "value": 2.5
        },
        {
            "source": "TableCreateColumns",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "OrderPOCreate",
            "target": "X_C_Order",
            "value": 16.0
        },
        {
            "source": "RColumn",
            "target": "MLookupFactory",
            "value": 3.0
        },
        {
            "source": "MTemplate",
            "target": "MWebProject",
            "value": 1.5
        },
        {
            "source": "GridWindow",
            "target": "MImage",
            "value": 1.0
        },
        {
            "source": "MResourceType",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MLandedCost",
            "target": "X_C_InvoiceLine",
            "value": 0.5
        },
        {
            "source": "MUOMConversion",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "X_C_BPartner_Location",
            "value": 3.5
        },
        {
            "source": "MInventoryLine",
            "target": "X_M_Storage",
            "value": 3.5
        },
        {
            "source": "MInvoice",
            "target": "X_C_DocTypeCounter",
            "value": 3.0
        },
        {
            "source": "MProjectPhase",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "RColumn",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MCommissionRun",
            "target": "MCommissionAmt",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MTransaction",
            "value": 1.0
        },
        {
            "source": "DunningPrint",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "CalloutOrder",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "MDocTypeCounter",
            "value": 1.5
        },
        {
            "source": "Tax",
            "target": "Tax",
            "value": 4.5
        },
        {
            "source": "ImportPayment",
            "target": "MBankAccount",
            "value": 0.5
        },
        {
            "source": "MDataMigration",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MSchedulerPara",
            "target": "X_AD_Process_Para",
            "value": 1.0
        },
        {
            "source": "MAllocationHdr",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "PaymentProcessor",
            "value": 0.5
        },
        {
            "source": "MBPartner",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MProduct",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MAdvertisement",
            "target": "MAdvertisement",
            "value": 1.5
        },
        {
            "source": "ReplenishReport",
            "target": "X_T_Replenish",
            "value": 13.5
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "X_C_PaySelection",
            "value": 1.0
        },
        {
            "source": "MDistributionRunLine",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "ImportInvoice",
            "target": "MBPartnerLocation",
            "value": 0.5
        },
        {
            "source": "MRequisitionLine",
            "target": "X_M_RequisitionLine",
            "value": 18.0
        },
        {
            "source": "MPriceList",
            "target": "X_C_Currency",
            "value": 0.5
        },
        {
            "source": "MMediaServer",
            "target": "MWebProject",
            "value": 1.5
        },
        {
            "source": "MAlertRule",
            "target": "MAlertRule",
            "value": 0.5
        },
        {
            "source": "ImportOrder",
            "target": "X_AD_User",
            "value": 2.5
        },
        {
            "source": "MPOSKeyLayout",
            "target": "MPOSKeyLayout",
            "value": 1.0
        },
        {
            "source": "MImpFormatRow",
            "target": "X_AD_ImpFormat_Row",
            "value": 4.0
        },
        {
            "source": "MProjectLine",
            "target": "MProjectPhase",
            "value": 0.5
        },
        {
            "source": "MInterestArea",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MAssignmentSlot",
            "target": "Language",
            "value": 4.0
        },
        {
            "source": "MOrderLine",
            "target": "X_C_OrderLine",
            "value": 105.0
        },
        {
            "source": "MCash",
            "target": "TimeUtil",
            "value": 1.0
        },
        {
            "source": "MInfoWindow",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "td",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "CommissionCalc",
            "target": "X_C_CommissionDetail",
            "value": 1.0
        },
        {
            "source": "MPaymentBatch",
            "target": "X_C_PaySelection",
            "value": 0.5
        },
        {
            "source": "RfQCreatePO",
            "target": "MOrder",
            "value": 4.0
        },
        {
            "source": "ImportInvoice",
            "target": "X_C_Invoice",
            "value": 9.0
        },
        {
            "source": "MColorSchema",
            "target": "X_PA_ColorSchema",
            "value": 21.0
        },
        {
            "source": "MProject",
            "target": "X_C_Project",
            "value": 20.5
        },
        {
            "source": "MPaymentAllocate",
            "target": "CLogger",
            "value": 2.0
        },
        {
            "source": "MInOutConfirm",
            "target": "MInOutLine",
            "value": 4.0
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_C_Charge",
            "value": 1.0
        },
        {
            "source": "OFXBankStatementHandler",
            "target": "MBankStatementLoader",
            "value": 2.5
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_Invoice",
            "value": 14.5
        },
        {
            "source": "FinStatement",
            "target": "X_C_Period",
            "value": 1.5
        },
        {
            "source": "MWFActivity",
            "target": "ProcessInfo",
            "value": 4.0
        },
        {
            "source": "MInvoice",
            "target": "MCurrency",
            "value": 1.0
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "CostUpdate",
            "target": "MCost",
            "value": 3.5
        },
        {
            "source": "AssetDelivery",
            "target": "MAsset",
            "value": 3.0
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MInvoicePaySchedule",
            "value": 0.5
        },
        {
            "source": "MUserMail",
            "target": "EMail",
            "value": 5.5
        },
        {
            "source": "MInfoWindow",
            "target": "MInfoWindow",
            "value": 0.5
        },
        {
            "source": "MMovementConfirm",
            "target": "X_M_Movement",
            "value": 0.5
        },
        {
            "source": "MBPartner",
            "target": "X_C_BPartner_Location",
            "value": 2.5
        },
        {
            "source": "MInOutLine",
            "target": "X_M_InOut",
            "value": 6.5
        },
        {
            "source": "ImportInvoice",
            "target": "DB",
            "value": 23.0
        },
        {
            "source": "RfQResponseRank",
            "target": "X_C_RfQResponseLineQty",
            "value": 3.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_Tax",
            "value": 1.0
        },
        {
            "source": "BankStatementPayment",
            "target": "CompiereUserException",
            "value": 1.5
        },
        {
            "source": "CalloutOrder",
            "target": "X_M_Warehouse",
            "value": 0.5
        },
        {
            "source": "MBPBankAccount",
            "target": "X_C_BP_BankAccount",
            "value": 16.5
        },
        {
            "source": "ExpenseSOrder",
            "target": "ExpenseSOrder",
            "value": 2.0
        },
        {
            "source": "MJournal",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MCommissionRun",
            "target": "X_C_Commission",
            "value": 0.5
        },
        {
            "source": "MChat",
            "target": "MChatEntry",
            "value": 1.0
        },
        {
            "source": "MInOutConfirm",
            "target": "Msg",
            "value": 2.0
        },
        {
            "source": "MBPBankAccount",
            "target": "MLocation",
            "value": 1.0
        },
        {
            "source": "ImportGLJournal",
            "target": "DB",
            "value": 28.0
        },
        {
            "source": "RfQCreatePO",
            "target": "X_C_Order",
            "value": 5.5
        },
        {
            "source": "MCashLine",
            "target": "X_C_CashLine",
            "value": 43.5
        },
        {
            "source": "ReplenishReport",
            "target": "MRequisition",
            "value": 1.0
        },
        {
            "source": "MBOM",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MInvoiceLine",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MAsset",
            "target": "TimeUtil",
            "value": 1.5
        },
        {
            "source": "PP_Authorize",
            "target": "PaymentProcessor",
            "value": 2.5
        },
        {
            "source": "MTableIndex",
            "target": "X_AD_TableIndex",
            "value": 9.0
        },
        {
            "source": "MCostQueue",
            "target": "X_C_AcctSchema",
            "value": 3.0
        },
        {
            "source": "ScheduleUtil",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "ComponentProduct",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "StorageCleanup",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MRequisitionLine",
            "target": "MRequisitionLine",
            "value": 4.5
        },
        {
            "source": "MPayment",
            "target": "MPeriod",
            "value": 1.0
        },
        {
            "source": "AllocationAuto",
            "target": "X_C_AllocationHdr",
            "value": 2.5
        },
        {
            "source": "TranslationImportExport",
            "target": "TranslationMgr",
            "value": 4.0
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "X_C_AcctSchema_GL",
            "value": 0.5
        },
        {
            "source": "MRfQResponseLine",
            "target": "X_C_RfQLine",
            "value": 0.5
        },
        {
            "source": "MReportColumn",
            "target": "MReportTree",
            "value": 0.5
        },
        {
            "source": "MCommissionAmt",
            "target": "MCommissionAmt",
            "value": 1.0
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "X_C_InvoiceBatch",
            "value": 2.0
        },
        {
            "source": "MBPartnerProduct",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "X_C_InvoiceLine",
            "value": 4.5
        },
        {
            "source": "MCashBook",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MProjectPhase",
            "target": "X_C_Phase",
            "value": 4.0
        },
        {
            "source": "ImportGLJournal",
            "target": "MJournal",
            "value": 2.5
        },
        {
            "source": "MAlertProcessorLog",
            "target": "CompiereProcessorLog",
            "value": 2.0
        },
        {
            "source": "MProjectTypePhase",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCash",
            "target": "MCash",
            "value": 14.5
        },
        {
            "source": "PeriodControlStatus",
            "target": "MPeriodControl",
            "value": 0.5
        },
        {
            "source": "MScheduler",
            "target": "X_AD_PInstance",
            "value": 1.0
        },
        {
            "source": "ColumnSync",
            "target": "DB",
            "value": 2.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "MBPartner",
            "value": 1.5
        },
        {
            "source": "CalloutOrder",
            "target": "MWarehouse",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MOrderLine",
            "value": 4.5
        },
        {
            "source": "MPaymentAllocate",
            "target": "MDocType",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "X_C_Invoice",
            "value": 0.5
        },
        {
            "source": "MBPStatus",
            "target": "X_C_BP_Status",
            "value": 2.0
        },
        {
            "source": "FTPClient",
            "target": "Configurable",
            "value": 2.0
        },
        {
            "source": "MDistributionRunDetail",
            "target": "MDistributionRunDetail",
            "value": 0.5
        },
        {
            "source": "RfQCopyLines",
            "target": "MRfQLine",
            "value": 0.5
        },
        {
            "source": "InOutGenerate",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "MBPartnerLocation",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MIndex",
            "target": "MIndexLog",
            "value": 0.5
        },
        {
            "source": "MInfoWindow",
            "target": "MInfoColumn",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "X_C_DocType",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "X_M_Product",
            "value": 1.5
        },
        {
            "source": "MInventory",
            "target": "MStorage",
            "value": 3.5
        },
        {
            "source": "ProductCost",
            "target": "Trx",
            "value": 1.0
        },
        {
            "source": "MIndexLog",
            "target": "X_K_IndexLog",
            "value": 2.0
        },
        {
            "source": "MGoalRestriction",
            "target": "X_PA_GoalRestriction",
            "value": 2.5
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "MInvoiceBatchLine",
            "value": 8.0
        },
        {
            "source": "RfQCreatePO",
            "target": "MRfQ",
            "value": 1.0
        },
        {
            "source": "MProductCosting",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MProductPO",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MRequestProcessorRoute",
            "target": "X_R_RequestProcessor_Route",
            "value": 2.0
        },
        {
            "source": "MJournalLine",
            "target": "X_GL_Journal",
            "value": 3.0
        },
        {
            "source": "MJournal",
            "target": "MElementValue",
            "value": 1.5
        },
        {
            "source": "MCostUpdateLine",
            "target": "X_M_CostUpdate",
            "value": 0.5
        },
        {
            "source": "MProjectTask",
            "target": "X_C_ProjectTask",
            "value": 8.0
        },
        {
            "source": "MYear",
            "target": "X_C_Calendar",
            "value": 0.5
        },
        {
            "source": "MProjectPhase",
            "target": "MProjectTask",
            "value": 1.5
        },
        {
            "source": "MOrderTax",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MInventoryLine",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "MChat",
            "target": "hr",
            "value": 0.5
        },
        {
            "source": "MCostDetail",
            "target": "MCost",
            "value": 12.5
        },
        {
            "source": "MDistributionLine",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MContainer",
            "target": "CacheHandler",
            "value": 2.0
        },
        {
            "source": "MRefList",
            "target": "X_AD_Ref_List",
            "value": 2.0
        },
        {
            "source": "MNewsChannel",
            "target": "MIndex",
            "value": 0.5
        },
        {
            "source": "MRegistrationAttribute",
            "target": "X_A_RegistrationAttribute",
            "value": 2.0
        },
        {
            "source": "MInventory",
            "target": "X_M_Transaction",
            "value": 2.0
        },
        {
            "source": "ImportInvoice",
            "target": "X_C_BPartner",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "X_M_InOutLineMA",
            "value": 4.5
        },
        {
            "source": "MTimeExpense",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MTimeExpense",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "GridField",
            "target": "Evaluatee",
            "value": 2.0
        },
        {
            "source": "MComponentRegUpdate",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MAcctProcessor",
            "target": "MAcctProcessorLog",
            "value": 0.5
        },
        {
            "source": "CLogger",
            "target": "CompiereLogger",
            "value": 2.0
        },
        {
            "source": "MChangeRequest",
            "target": "MBOM",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "ChangeVO",
            "value": 1.5
        },
        {
            "source": "MAcctSchemaGL",
            "target": "X_C_AcctSchema_GL",
            "value": 2.0
        },
        {
            "source": "InvoiceNGL",
            "target": "MJournalBatch",
            "value": 1.0
        },
        {
            "source": "MDocTypeCounter",
            "target": "MDocType",
            "value": 1.0
        },
        {
            "source": "ReplicationLocal",
            "target": "ReplicationLocal",
            "value": 5.5
        },
        {
            "source": "MMovement",
            "target": "X_M_MovementLineMA",
            "value": 4.5
        },
        {
            "source": "MCStage",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MBankStatement",
            "target": "MPayment",
            "value": 1.0
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNodePR",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "MLead",
            "value": 12.0
        },
        {
            "source": "MRecurring",
            "target": "X_C_Order",
            "value": 1.0
        },
        {
            "source": "DunningPrint",
            "target": "MDunningRun",
            "value": 0.5
        },
        {
            "source": "MMovementConfirm",
            "target": "Msg",
            "value": 3.5
        },
        {
            "source": "ScheduleUtil",
            "target": "MUOM",
            "value": 0.5
        },
        {
            "source": "MUOM",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMediaDeploy",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ProjectPhaseGenOrder",
            "target": "X_C_ProjectPhase",
            "value": 6.0
        },
        {
            "source": "CommissionCalc",
            "target": "CompiereSystemException",
            "value": 1.0
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNode",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "MWFResponsible",
            "value": 4.5
        },
        {
            "source": "MJournalBatch",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MStatusCategory",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "CalloutPayment",
            "target": "CalloutPayment",
            "value": 1.0
        },
        {
            "source": "TableCreateColumns",
            "target": "CompiereSystemException",
            "value": 1.0
        },
        {
            "source": "MIndex",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MInventoryLine",
            "target": "MInventoryLineMA",
            "value": 0.5
        },
        {
            "source": "ExpenseSOrder",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "MRequestType",
            "target": "X_R_StatusCategory",
            "value": 2.0
        },
        {
            "source": "MReportTree",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "ReplenishReport",
            "target": "X_M_Warehouse",
            "value": 6.0
        },
        {
            "source": "WebInfo",
            "target": "MInterestArea",
            "value": 1.0
        },
        {
            "source": "MAsset",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MProductPrice",
            "target": "X_M_PriceList_Version",
            "value": 0.5
        },
        {
            "source": "MBPBankAccount",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "p",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MAlertRecipient",
            "target": "X_AD_AlertRecipient",
            "value": 2.0
        },
        {
            "source": "MWFNodeNext",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "ResultTableModel",
            "target": "RModel",
            "value": 4.5
        },
        {
            "source": "MAttributeSet",
            "target": "X_M_AttributeSet",
            "value": 19.0
        },
        {
            "source": "MMovement",
            "target": "MMovementConfirm",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "X_C_AllocationHdr",
            "value": 3.0
        },
        {
            "source": "MContainer",
            "target": "X_CM_CStageTTable",
            "value": 1.0
        },
        {
            "source": "Aging",
            "target": "X_T_Aging",
            "value": 4.0
        },
        {
            "source": "MTemplate",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "FileUpload",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MProjectLine",
            "target": "ChangeVO",
            "value": 0.5
        },
        {
            "source": "TableCreateColumns",
            "target": "X_AD_Table",
            "value": 3.5
        },
        {
            "source": "img",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MDocType",
            "target": "X_C_DocType",
            "value": 2.0
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_Process",
            "value": 1.0
        },
        {
            "source": "MCostDetail",
            "target": "X_M_CostDetail",
            "value": 57.0
        },
        {
            "source": "MPaySchedule",
            "target": "X_C_PaySchedule",
            "value": 6.0
        },
        {
            "source": "BankStatementPayment",
            "target": "MBankStatement",
            "value": 0.5
        },
        {
            "source": "MTimeExpense",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MInventory",
            "target": "MPeriod",
            "value": 1.0
        },
        {
            "source": "MStore",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MDiscountSchema",
            "target": "X_M_DiscountSchemaBreak",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "MProductLocator",
            "value": 0.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MInvoiceTax",
            "value": 1.0
        },
        {
            "source": "ASyncWorker",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MSLACriteria",
            "target": "X_PA_SLA_Criteria",
            "value": 3.5
        },
        {
            "source": "MScheduler",
            "target": "X_AD_Attachment",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "X_M_MatchPO",
            "value": 1.0
        },
        {
            "source": "InvoiceNGL",
            "target": "MJournal",
            "value": 0.5
        },
        {
            "source": "ComponentProduct",
            "target": "X_AD_ComponentReg",
            "value": 9.5
        },
        {
            "source": "MClick",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MBPGroup",
            "target": "MBPGroup",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "b",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "PaySelectionCreateCheck",
            "value": 0.5
        },
        {
            "source": "MRequisition",
            "target": "MOrderLine",
            "value": 0.5
        },
        {
            "source": "MProjectLine",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MMatchPO",
            "value": 0.5
        },
        {
            "source": "StorageCleanup",
            "target": "X_M_Movement",
            "value": 2.0
        },
        {
            "source": "MMatchPO",
            "target": "MFactAcct",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MPeriod",
            "value": 1.0
        },
        {
            "source": "MCostQueue",
            "target": "MCostElement",
            "value": 0.5
        },
        {
            "source": "MProductLocator",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MDataMigrationEntry",
            "target": "X_AD_Table",
            "value": 0.5
        },
        {
            "source": "MProject",
            "target": "MProjectIssue",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "MRfQResponse",
            "value": 2.0
        },
        {
            "source": "MWFNode",
            "target": "X_AD_WF_Node",
            "value": 34.0
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "InvoiceBatchProcess",
            "value": 1.0
        },
        {
            "source": "MPaymentTerm",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "body",
            "target": "PageEvents",
            "value": 2.0
        },
        {
            "source": "MRfQResponse",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCommissionDetail",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "MProduct",
            "value": 1.0
        },
        {
            "source": "MDataMigrationPreview",
            "target": "X_AD_DataMigrationPreview",
            "value": 4.5
        },
        {
            "source": "WebInfo",
            "target": "MRfQResponse",
            "value": 1.0
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "X_C_Invoice",
            "value": 0.5
        },
        {
            "source": "MNewsChannel",
            "target": "MNewsItem",
            "value": 1.0
        },
        {
            "source": "MProduct",
            "target": "X_S_ExpenseType",
            "value": 8.0
        },
        {
            "source": "MPeriod",
            "target": "X_AD_ClientInfo",
            "value": 1.5
        },
        {
            "source": "MBankStatementLine",
            "target": "X_C_BankStatement",
            "value": 1.0
        },
        {
            "source": "ImportLocator",
            "target": "X_M_Locator",
            "value": 0.5
        },
        {
            "source": "MProduct",
            "target": "X_M_Product",
            "value": 39.5
        },
        {
            "source": "MInOutLineMA",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MDunningRunLine",
            "target": "X_C_Invoice",
            "value": 2.5
        },
        {
            "source": "MCost",
            "target": "X_C_AcctSchema",
            "value": 13.0
        },
        {
            "source": "MLead",
            "target": "X_C_Location",
            "value": 3.0
        },
        {
            "source": "WebInfo",
            "target": "DB",
            "value": 13.0
        },
        {
            "source": "MRequest",
            "target": "X_C_BPartner",
            "value": 0.5
        },
        {
            "source": "MInOutConfirm",
            "target": "X_C_Invoice",
            "value": 1.5
        },
        {
            "source": "ImportInventory",
            "target": "X_M_AttributeSet",
            "value": 1.5
        },
        {
            "source": "MJournalLine",
            "target": "MAccount",
            "value": 1.5
        },
        {
            "source": "ColumnSync",
            "target": "X_AD_Table",
            "value": 1.5
        },
        {
            "source": "DocWorkflowManager",
            "target": "Evaluator",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "MOrderTax",
            "value": 2.0
        },
        {
            "source": "DunningPrint",
            "target": "ReportEngine",
            "value": 2.5
        },
        {
            "source": "MRequest",
            "target": "MMailText",
            "value": 0.5
        },
        {
            "source": "MBOMProduct",
            "target": "Msg",
            "value": 2.0
        },
        {
            "source": "MComponentUse",
            "target": "X_AD_ComponentReg",
            "value": 0.5
        },
        {
            "source": "ReplicationRemote",
            "target": "DB",
            "value": 2.5
        },
        {
            "source": "MRequestProcessor",
            "target": "CompiereProcessor",
            "value": 2.0
        },
        {
            "source": "MUOMConversion",
            "target": "X_M_Product",
            "value": 2.0
        },
        {
            "source": "AssetDelivery",
            "target": "MMailText",
            "value": 8.0
        },
        {
            "source": "PriceListCreate",
            "target": "CompiereUserException",
            "value": 1.0
        },
        {
            "source": "MInOutLine",
            "target": "MInvoiceLine",
            "value": 3.0
        },
        {
            "source": "MAssetDelivery",
            "target": "X_A_Asset",
            "value": 4.0
        },
        {
            "source": "ImportOrder",
            "target": "MLocation",
            "value": 2.0
        },
        {
            "source": "TranslationMgr",
            "target": "X_AD_Language",
            "value": 0.5
        },
        {
            "source": "MMediaServer",
            "target": "X_CM_Media",
            "value": 1.5
        },
        {
            "source": "MDistributionLine",
            "target": "MDistribution",
            "value": 2.0
        },
        {
            "source": "MAcctProcessorLog",
            "target": "CompiereProcessorLog",
            "value": 2.0
        },
        {
            "source": "SLAGoalProcess",
            "target": "MSLAGoal",
            "value": 0.5
        },
        {
            "source": "MScheduler",
            "target": "X_AD_Note",
            "value": 3.0
        },
        {
            "source": "MOrder",
            "target": "MInvoiceLine",
            "value": 4.5
        },
        {
            "source": "MPaymentBatch",
            "target": "MPaySelection",
            "value": 0.5
        },
        {
            "source": "MDistributionRunDetail",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "MJournalLine",
            "value": 3.0
        },
        {
            "source": "MTask",
            "target": "X_AD_Task",
            "value": 4.5
        },
        {
            "source": "MRequest",
            "target": "MRequestAction",
            "value": 1.5
        },
        {
            "source": "TranslationImportExport",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "X_C_BPartner_Location",
            "value": 2.5
        },
        {
            "source": "MContactInterest",
            "target": "X_C_Lead",
            "value": 1.5
        },
        {
            "source": "CalloutPayment",
            "target": "X_C_Invoice",
            "value": 1.5
        },
        {
            "source": "MPayment",
            "target": "MPaymentProcessor",
            "value": 3.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_OrderLine",
            "value": 2.0
        },
        {
            "source": "Document",
            "target": "Node",
            "value": 2.0
        },
        {
            "source": "FileUpload",
            "target": "label",
            "value": 1.0
        },
        {
            "source": "TelnetClient",
            "target": "Telnet",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "MInOut",
            "value": 5.0
        },
        {
            "source": "MMeasure",
            "target": "CLogger",
            "value": 2.5
        },
        {
            "source": "RfQCreateSO",
            "target": "X_C_RfQLineQty",
            "value": 2.0
        },
        {
            "source": "MCash",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "DocWorkflowManager",
            "target": "DocWorkflowMgr",
            "value": 2.0
        },
        {
            "source": "MRequisition",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MRequestUpdate",
            "target": "X_R_RequestUpdate",
            "value": 8.0
        },
        {
            "source": "UIWindow",
            "target": "UIWindowVO",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "X_M_Product",
            "value": 5.0
        },
        {
            "source": "GridField",
            "target": "MLookup",
            "value": 1.0
        },
        {
            "source": "MRfQTopicSubscriber",
            "target": "MProductCategory",
            "value": 0.5
        },
        {
            "source": "ImportAccount",
            "target": "X_C_AcctSchema_Element",
            "value": 0.5
        },
        {
            "source": "BankStatementPayment",
            "target": "MInvoice",
            "value": 1.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "MProjectIssue",
            "target": "X_C_ProjectIssue",
            "value": 16.5
        },
        {
            "source": "MAsset",
            "target": "MAttributeSetInstance",
            "value": 0.5
        },
        {
            "source": "ImportContact",
            "target": "ImportContact",
            "value": 3.5
        },
        {
            "source": "MProjectType",
            "target": "MProjectType",
            "value": 0.5
        },
        {
            "source": "MDataMigration",
            "target": "X_AD_DataMigration",
            "value": 6.0
        },
        {
            "source": "MDocTypeCounter",
            "target": "MDocTypeCounter",
            "value": 1.5
        },
        {
            "source": "MLocation",
            "target": "X_C_Location",
            "value": 2.0
        },
        {
            "source": "MCommissionAmt",
            "target": "X_C_CommissionDetail",
            "value": 0.5
        },
        {
            "source": "RfQCreatePO",
            "target": "MRfQResponseLine",
            "value": 1.0
        },
        {
            "source": "MWarehousePrice",
            "target": "X_RV_WarehousePrice",
            "value": 2.5
        },
        {
            "source": "MBPBankAccount",
            "target": "Util",
            "value": 4.0
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_C_OrderLine",
            "value": 1.5
        },
        {
            "source": "MigrateData",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MTaxPostal",
            "target": "X_C_TaxPostal",
            "value": 2.0
        },
        {
            "source": "MAlertProcessor",
            "target": "MAlert",
            "value": 0.5
        },
        {
            "source": "MRfQResponseLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "MBOMProduct",
            "value": 1.0
        },
        {
            "source": "MInfoColumn",
            "target": "X_AD_Element",
            "value": 1.5
        },
        {
            "source": "MRequest",
            "target": "MRequestCategory",
            "value": 0.5
        },
        {
            "source": "MInOutConfirm",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "Tax",
            "target": "X_C_TaxPostal",
            "value": 1.5
        },
        {
            "source": "MBank",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MDistribution",
            "target": "X_GL_Distribution",
            "value": 47.0
        },
        {
            "source": "MDistributionRun",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MFormAccess",
            "target": "X_AD_Form",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_M_AttributeSetInstance",
            "value": 3.0
        },
        {
            "source": "MMovement",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MInOutLineConfirm",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MIndex",
            "target": "MIndex",
            "value": 5.5
        },
        {
            "source": "WebLogin",
            "target": "MSession",
            "value": 0.5
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "X_C_ValidCombination",
            "value": 8.5
        },
        {
            "source": "MultiPartElement",
            "target": "ConcreteElement",
            "value": 2.0
        },
        {
            "source": "MContainer",
            "target": "MContainerElement",
            "value": 1.0
        },
        {
            "source": "EntityTypeRegister",
            "target": "HttpConnectionParams",
            "value": 0.5
        },
        {
            "source": "MInOutConfirm",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MStatus",
            "target": "MStatus",
            "value": 1.5
        },
        {
            "source": "ProjectIssue",
            "target": "X_S_TimeExpenseLine",
            "value": 6.0
        },
        {
            "source": "ProjectGenOrder",
            "target": "MOrderLine",
            "value": 3.5
        },
        {
            "source": "MBPBankAccount",
            "target": "X_C_Location",
            "value": 2.0
        },
        {
            "source": "ComponentProduct",
            "target": "MAttachment",
            "value": 0.5
        },
        {
            "source": "GridWindow",
            "target": "a",
            "value": 3.0
        },
        {
            "source": "PriceListCreate",
            "target": "X_M_ProductPrice",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "MWarehouse",
            "value": 2.0
        },
        {
            "source": "ExpenseSOrder",
            "target": "X_C_Order",
            "value": 7.0
        },
        {
            "source": "MJournalBatch",
            "target": "X_GL_JournalBatch",
            "value": 43.5
        },
        {
            "source": "MMovementLine",
            "target": "Ctx",
            "value": 1.5
        },
        {
            "source": "ProjectPhaseGenOrder",
            "target": "X_C_Order",
            "value": 2.0
        },
        {
            "source": "MInOut",
            "target": "MMatchPO",
            "value": 0.5
        },
        {
            "source": "MPackage",
            "target": "MPackage",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MInOutLine",
            "value": 24.0
        },
        {
            "source": "ReplenishReport",
            "target": "X_C_OrderLine",
            "value": 0.5
        },
        {
            "source": "RegisterSystem",
            "target": "X_AD_Registration",
            "value": 7.0
        },
        {
            "source": "ReplenishReport",
            "target": "X_M_RequisitionLine",
            "value": 1.0
        },
        {
            "source": "MSchedulerLog",
            "target": "X_AD_SchedulerLog",
            "value": 3.5
        },
        {
            "source": "MCostQueue",
            "target": "X_M_CostQueue",
            "value": 16.0
        },
        {
            "source": "MBPartner",
            "target": "DB",
            "value": 10.0
        },
        {
            "source": "MProduct",
            "target": "MProduct",
            "value": 7.0
        },
        {
            "source": "RfQCreateSO",
            "target": "X_C_OrderLine",
            "value": 0.5
        },
        {
            "source": "MJournal",
            "target": "X_C_BPartner",
            "value": 1.0
        },
        {
            "source": "MLdapProcessor",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "DistributionCreate",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "ScheduleUtil",
            "target": "MUOMConversion",
            "value": 0.5
        },
        {
            "source": "ImportInvoice",
            "target": "MUser",
            "value": 1.0
        },
        {
            "source": "BankStatementMatcher",
            "target": "MBankStatement",
            "value": 0.5
        },
        {
            "source": "CalloutOrder",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "WebLogin",
            "target": "WebLogin",
            "value": 11.5
        },
        {
            "source": "MInOutLine",
            "target": "Msg",
            "value": 2.0
        },
        {
            "source": "MRequestCategory",
            "target": "MRequestCategory",
            "value": 0.5
        },
        {
            "source": "MComponentReg",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "PartBase",
            "target": "Part",
            "value": 2.0
        },
        {
            "source": "MRequisition",
            "target": "MRequisition",
            "value": 9.5
        },
        {
            "source": "MInOutLineConfirm",
            "target": "MInOutLine",
            "value": 2.5
        },
        {
            "source": "WebLogin",
            "target": "WebUser",
            "value": 23.5
        },
        {
            "source": "CalloutOrder",
            "target": "MInOutLine",
            "value": 2.0
        },
        {
            "source": "MGoal",
            "target": "Msg",
            "value": 1.5
        },
        {
            "source": "WebUser",
            "target": "WebUser",
            "value": 19.5
        },
        {
            "source": "MContainer",
            "target": "DB",
            "value": 3.0
        },
        {
            "source": "MCommissionAmt",
            "target": "X_C_CommissionAmt",
            "value": 8.0
        },
        {
            "source": "MBPartner",
            "target": "MBPartner",
            "value": 13.0
        },
        {
            "source": "ScheduleUtil",
            "target": "MResourceAssignment",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "MOrder",
            "value": 3.0
        },
        {
            "source": "MReplication",
            "target": "X_AD_Replication",
            "value": 2.5
        },
        {
            "source": "MWikiToken",
            "target": "MContainer",
            "value": 0.5
        },
        {
            "source": "MViewComponent",
            "target": "X_AD_ViewComponent",
            "value": 2.0
        },
        {
            "source": "ValueNamePair",
            "target": "NamePair",
            "value": 2.0
        },
        {
            "source": "MNewsItem",
            "target": "X_CM_NewsItem",
            "value": 7.5
        },
        {
            "source": "BankStatementMatcher",
            "target": "X_C_BankStatementLine",
            "value": 2.5
        },
        {
            "source": "ImportBankStatement",
            "target": "MBankStatementLine",
            "value": 1.0
        },
        {
            "source": "MRequestType",
            "target": "DB",
            "value": 3.0
        },
        {
            "source": "ComponentProduct",
            "target": "X_C_TaxCategory",
            "value": 0.5
        },
        {
            "source": "MAttributeSetInstance",
            "target": "KeyNamePair",
            "value": 0.5
        },
        {
            "source": "MInOutLineMA",
            "target": "X_M_InOutLine",
            "value": 1.0
        },
        {
            "source": "DeliveryAccuracy",
            "target": "SLACriteria",
            "value": 2.0
        },
        {
            "source": "MJournal",
            "target": "X_C_DocType",
            "value": 3.0
        },
        {
            "source": "MOrder",
            "target": "ChangeVO",
            "value": 3.0
        },
        {
            "source": "ComponentProduct",
            "target": "MPriceListVersion",
            "value": 1.0
        },
        {
            "source": "MDunningRunEntry",
            "target": "X_C_DunningRunEntry",
            "value": 9.0
        },
        {
            "source": "MPOS",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MJournalLine",
            "target": "X_C_ElementValue",
            "value": 0.5
        },
        {
            "source": "ReplicationLocal",
            "target": "Server",
            "value": 3.0
        },
        {
            "source": "MWFProcess",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MPOSKey",
            "target": "X_C_POSKey",
            "value": 2.0
        },
        {
            "source": "ImportInventory",
            "target": "X_I_Inventory",
            "value": 10.0
        },
        {
            "source": "MAssetDelivery",
            "target": "X_A_Asset_Delivery",
            "value": 12.0
        },
        {
            "source": "MProduct",
            "target": "X_M_Storage",
            "value": 3.0
        },
        {
            "source": "MIndex",
            "target": "X_K_Index",
            "value": 6.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWFNodePara",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "EntityEnclosingMethod",
            "target": "ExpectContinueMethod",
            "value": 2.0
        },
        {
            "source": "MProject",
            "target": "MAccount",
            "value": 0.5
        },
        {
            "source": "MTaxCategory",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MProductionLine",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MCash",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "Aging",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "MBankStatement",
            "target": "MBankStatement",
            "value": 5.5
        },
        {
            "source": "MWFNodeNext",
            "target": "MWFNextCondition",
            "value": 2.0
        },
        {
            "source": "MBankStatement",
            "target": "MPeriod",
            "value": 2.0
        },
        {
            "source": "GridField",
            "target": "MLocationLookup",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "X_C_AllocationHdr",
            "value": 0.5
        },
        {
            "source": "AssetDelivery",
            "target": "MUserMail",
            "value": 1.0
        },
        {
            "source": "DocumentEngine",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MSalesRegion",
            "target": "X_C_SalesRegion",
            "value": 2.0
        },
        {
            "source": "MCost",
            "target": "X_M_CostElement",
            "value": 2.0
        },
        {
            "source": "MWorkflow",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "a",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MAlert",
            "target": "MAlertRecipient",
            "value": 2.5
        },
        {
            "source": "MProductBOM",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "Util",
            "value": 2.0
        },
        {
            "source": "MCost",
            "target": "MCost",
            "value": 13.5
        },
        {
            "source": "CalloutOrder",
            "target": "MInOut",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "X_R_Request",
            "value": 7.0
        },
        {
            "source": "ChangeLogProcess",
            "target": "X_AD_Column",
            "value": 6.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MInOutLine",
            "value": 5.0
        },
        {
            "source": "WebInfo",
            "target": "MOrder",
            "value": 1.0
        },
        {
            "source": "ViewCreate",
            "target": "DB",
            "value": 3.5
        },
        {
            "source": "MStorage",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "GridField",
            "target": "Lookup",
            "value": 7.0
        },
        {
            "source": "MRequisition",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MMatchInv",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "MProductCategory",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "ImportRequest",
            "target": "X_R_Request",
            "value": 0.5
        },
        {
            "source": "MJournal",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MStore",
            "target": "EMail",
            "value": 3.0
        },
        {
            "source": "MWFEventAudit",
            "target": "MWFActivity",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MInOut",
            "value": 1.5
        },
        {
            "source": "RfQResponseRank",
            "target": "X_C_RfQResponse",
            "value": 8.0
        },
        {
            "source": "MScheduler",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "AssetDelivery",
            "target": "X_R_MailText",
            "value": 2.0
        },
        {
            "source": "MCalendar",
            "target": "MYear",
            "value": 1.0
        },
        {
            "source": "VolumeTest",
            "target": "X_C_BPartner",
            "value": 2.0
        },
        {
            "source": "MResolution",
            "target": "MResolution",
            "value": 0.5
        },
        {
            "source": "EntityTypeRegister",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "CalloutOrder",
            "target": "MProduct",
            "value": 1.5
        },
        {
            "source": "ColumnSync",
            "target": "NamePair",
            "value": 0.5
        },
        {
            "source": "MTax",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "WebInfo",
            "target": "MWFActivity",
            "value": 1.0
        },
        {
            "source": "MAssignmentSlot",
            "target": "X_S_ResourceAssignment",
            "value": 3.0
        },
        {
            "source": "MPayment",
            "target": "X_C_AllocationLine",
            "value": 1.5
        },
        {
            "source": "MLoginMsg",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MTableIndex",
            "target": "MIndexColumn",
            "value": 1.5
        },
        {
            "source": "MRequest",
            "target": "X_R_Resolution",
            "value": 0.5
        },
        {
            "source": "WebInfo",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "MCommissionRun",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MProduct",
            "value": 2.5
        },
        {
            "source": "MHierarchy",
            "target": "MHierarchy",
            "value": 0.5
        },
        {
            "source": "MAttributeSetInstance",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMovement",
            "target": "NamePair",
            "value": 2.0
        },
        {
            "source": "MWFEventAudit",
            "target": "X_AD_WF_Activity",
            "value": 3.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MOrderLine",
            "value": 5.0
        },
        {
            "source": "MInOut",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MCStageElement",
            "target": "MCStageElement",
            "value": 2.0
        },
        {
            "source": "MScheduler",
            "target": "MScheduler",
            "value": 5.0
        },
        {
            "source": "MPayment",
            "target": "X_C_PaySelectionCheck",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "MWFNode",
            "value": 9.5
        },
        {
            "source": "DistributionCreate",
            "target": "DistributionCreate",
            "value": 0.5
        },
        {
            "source": "DocWorkflowManager",
            "target": "DocWorkflowManager",
            "value": 2.5
        },
        {
            "source": "MNewsItem",
            "target": "MNewsItem",
            "value": 1.5
        },
        {
            "source": "MCostQueue",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ImportBankStatement",
            "target": "MBankStatement",
            "value": 0.5
        },
        {
            "source": "MReturnPolicy",
            "target": "X_M_ReturnPolicyLine",
            "value": 0.5
        },
        {
            "source": "MResource",
            "target": "MResource",
            "value": 0.5
        },
        {
            "source": "ProjectIssue",
            "target": "X_C_Project",
            "value": 3.0
        },
        {
            "source": "ImportContact",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "X_C_DunningRun",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "AcctSchemaCopyAcct",
            "value": 1.0
        },
        {
            "source": "MRfQResponseLineQty",
            "target": "MRfQLineQty",
            "value": 1.5
        },
        {
            "source": "ImpFormat",
            "target": "ImpFormat",
            "value": 4.0
        },
        {
            "source": "MInvoice",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "MBPartner",
            "value": 5.0
        },
        {
            "source": "MScheduler",
            "target": "MSchedulerRecipient",
            "value": 0.5
        },
        {
            "source": "MPaySchedule",
            "target": "MPaymentTerm",
            "value": 2.0
        },
        {
            "source": "MInOutLine",
            "target": "X_M_MatchInv",
            "value": 1.0
        },
        {
            "source": "MBPartnerLocation",
            "target": "X_C_BPartner",
            "value": 0.5
        },
        {
            "source": "MProductCosting",
            "target": "X_M_Product",
            "value": 0.5
        },
        {
            "source": "MMedia",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MDistributionRunDetail",
            "target": "X_T_DistributionRunDetail",
            "value": 8.0
        },
        {
            "source": "M_Registration",
            "target": "X_AD_Registration",
            "value": 2.0
        },
        {
            "source": "MRegistrationValue",
            "target": "X_A_RegistrationAttribute",
            "value": 1.5
        },
        {
            "source": "Telnet",
            "target": "SocketClient",
            "value": 2.0
        },
        {
            "source": "ReplenishReport",
            "target": "X_M_MovementLine",
            "value": 3.0
        },
        {
            "source": "MRecurring",
            "target": "X_C_Recurring",
            "value": 21.0
        },
        {
            "source": "MInvoiceLine",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "MInvoiceLine",
            "target": "ValueNamePair",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "ResponseVO",
            "value": 1.5
        },
        {
            "source": "WebDoc",
            "target": "script",
            "value": 1.5
        },
        {
            "source": "MInOutLine",
            "target": "X_M_MatchPO",
            "value": 1.0
        },
        {
            "source": "MBOM",
            "target": "X_M_Product",
            "value": 1.0
        },
        {
            "source": "DistributionCreate",
            "target": "MOrder",
            "value": 5.0
        },
        {
            "source": "MInvoiceLine",
            "target": "Msg",
            "value": 2.5
        },
        {
            "source": "MMailMsg",
            "target": "X_W_Store",
            "value": 0.5
        },
        {
            "source": "ReplicationLocal",
            "target": "MSystem",
            "value": 2.0
        },
        {
            "source": "MInvoiceLine",
            "target": "MInOut",
            "value": 1.0
        },
        {
            "source": "i",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "CalloutOrder",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MWarehouse",
            "target": "X_M_Warehouse",
            "value": 2.0
        },
        {
            "source": "MPackage",
            "target": "X_M_Package",
            "value": 4.0
        },
        {
            "source": "MChat",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MMovement",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "ImportBankStatement",
            "target": "X_C_BankStatementLine",
            "value": 12.5
        },
        {
            "source": "MDunningRunLine",
            "target": "X_C_Payment",
            "value": 0.5
        },
        {
            "source": "ComponentProduct",
            "target": "X_M_Product_PO",
            "value": 5.0
        },
        {
            "source": "EntityTypeRegister",
            "target": "DefaultHttpParams",
            "value": 0.5
        },
        {
            "source": "MAllocationHdr",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "MStore",
            "target": "MStore",
            "value": 5.5
        },
        {
            "source": "MAssetGroup",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "DunningPrint",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MImpFormat",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWFNode",
            "target": "MColumn",
            "value": 1.5
        },
        {
            "source": "MCalendar",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "Msg",
            "value": 2.5
        },
        {
            "source": "RModelData",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInventory",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "CalloutPayment",
            "target": "X_C_DocType",
            "value": 2.5
        },
        {
            "source": "MRegistration",
            "target": "X_A_Registration",
            "value": 5.5
        },
        {
            "source": "MBankStatementLoader",
            "target": "BankStatementLoaderInterface",
            "value": 29.0
        },
        {
            "source": "MGLCategory",
            "target": "X_GL_Category",
            "value": 5.5
        },
        {
            "source": "MClickCount",
            "target": "ValueNamePair",
            "value": 0.5
        },
        {
            "source": "MAlertProcessor",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "WebUser",
            "target": "X_C_Location",
            "value": 7.0
        },
        {
            "source": "MPaySelection",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "ProjectPhaseGenOrder",
            "target": "MOrder",
            "value": 0.5
        },
        {
            "source": "MMatchPO",
            "target": "X_M_InOutLine",
            "value": 8.0
        },
        {
            "source": "DistributionCreate",
            "target": "X_C_Order",
            "value": 2.0
        },
        {
            "source": "CalloutOrder",
            "target": "GridField",
            "value": 5.0
        },
        {
            "source": "AssetDelivery",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MResourceUnAvailable",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MLandedCostAllocation",
            "target": "X_C_InvoiceLine",
            "value": 0.5
        },
        {
            "source": "MBOM",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "GridWorkbench",
            "target": "Query",
            "value": 0.5
        },
        {
            "source": "MAttribute",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_C_DocType",
            "value": 9.5
        },
        {
            "source": "MBankStatement",
            "target": "MBankStatementLine",
            "value": 1.0
        },
        {
            "source": "InOutGenerate",
            "target": "MOrder",
            "value": 0.5
        },
        {
            "source": "MDataMigrationPreview",
            "target": "X_AD_DataMigration",
            "value": 0.5
        },
        {
            "source": "ImportGLJournal",
            "target": "MJournalBatch",
            "value": 1.0
        },
        {
            "source": "ReplenishReport",
            "target": "MRequisitionLine",
            "value": 1.5
        },
        {
            "source": "MStore",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "WebSessionCtx",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MRegistrationValue",
            "target": "X_A_Registration",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "MRfQTopicSubscriber",
            "value": 0.5
        },
        {
            "source": "MCostDetail",
            "target": "X_C_AcctSchema",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_C_InvoiceLine",
            "value": 2.5
        },
        {
            "source": "GridWindow",
            "target": "GridField",
            "value": 2.0
        },
        {
            "source": "CommissionCalc",
            "target": "CompiereUserException",
            "value": 1.0
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "MAccount",
            "value": 0.5
        },
        {
            "source": "MDocTypeCounter",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ImportBPartner",
            "target": "MBPartnerLocation",
            "value": 1.0
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "MInvoiceLine",
            "value": 1.5
        },
        {
            "source": "MChat",
            "target": "p",
            "value": 3.0
        },
        {
            "source": "MLotCtl",
            "target": "X_M_LotCtl",
            "value": 6.5
        },
        {
            "source": "MCostDetail",
            "target": "X_M_CostElement",
            "value": 0.5
        },
        {
            "source": "RfQResponseRank",
            "target": "X_C_RfQLineQty",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "X_C_DocTypeCounter",
            "value": 3.0
        },
        {
            "source": "MBPartnerInfo",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MAcctSchemaElement",
            "target": "X_C_AcctSchema_Element",
            "value": 2.0
        },
        {
            "source": "MInOut",
            "target": "MAttributeSetInstance",
            "value": 0.5
        },
        {
            "source": "MRequestProcessor",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "body",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "BOMValidate",
            "target": "X_M_BOMProduct",
            "value": 1.0
        },
        {
            "source": "ReplicationLocal",
            "target": "MReplication",
            "value": 2.0
        },
        {
            "source": "MCStage",
            "target": "MWebProject",
            "value": 1.5
        },
        {
            "source": "VolumeTest",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "ResultTableCellRenderer",
            "target": "RModel",
            "value": 2.0
        },
        {
            "source": "CommissionCalc",
            "target": "X_C_CommissionRun",
            "value": 2.0
        },
        {
            "source": "MWFProcess",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MReportLineSet",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "TableCreateColumns",
            "target": "M_Element",
            "value": 0.5
        },
        {
            "source": "MDiscountSchemaBreak",
            "target": "X_M_DiscountSchemaBreak",
            "value": 9.0
        },
        {
            "source": "MAllocationLine",
            "target": "MPayment",
            "value": 1.5
        },
        {
            "source": "MWorkflowProcessor",
            "target": "X_AD_WorkflowProcessor",
            "value": 3.5
        },
        {
            "source": "MWFProcess",
            "target": "MWFActivity",
            "value": 3.5
        },
        {
            "source": "ComponentProduct",
            "target": "X_M_PriceList_Version",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "CLogger",
            "value": 7.0
        },
        {
            "source": "MWFNodeNext",
            "target": "X_AD_WF_Node",
            "value": 1.0
        },
        {
            "source": "MAllocationHdr",
            "target": "MInvoice",
            "value": 0.5
        },
        {
            "source": "MPaySelectionLine",
            "target": "X_C_PaySelection",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "X_R_RequestUpdate",
            "value": 1.5
        },
        {
            "source": "DistributionRun",
            "target": "MDistributionRun",
            "value": 2.0
        },
        {
            "source": "DunningPrint",
            "target": "MUserMail",
            "value": 0.5
        },
        {
            "source": "MReport",
            "target": "MReportLineSet",
            "value": 2.5
        },
        {
            "source": "MContainerElement",
            "target": "MContainerElement",
            "value": 3.0
        },
        {
            "source": "ViewCreate",
            "target": "Trx",
            "value": 0.5
        },
        {
            "source": "MRegistration",
            "target": "X_A_RegistrationAttribute",
            "value": 1.0
        },
        {
            "source": "DistributionRun",
            "target": "MDistributionRunLine",
            "value": 6.5
        },
        {
            "source": "GridWindow",
            "target": "th",
            "value": 2.0
        },
        {
            "source": "MBankStatementLoader",
            "target": "X_I_BankStatement",
            "value": 15.0
        },
        {
            "source": "MComponentCreate",
            "target": "X_AD_ComponentCreate",
            "value": 2.5
        },
        {
            "source": "MReplicationRun",
            "target": "X_AD_Replication_Run",
            "value": 4.0
        },
        {
            "source": "WebInfo",
            "target": "MAsset",
            "value": 0.5
        },
        {
            "source": "MCostDetail",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MCommissionDetail",
            "target": "MCommissionRun",
            "value": 0.5
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "X_C_Invoice",
            "value": 3.0
        },
        {
            "source": "MBPartner",
            "target": "Ctx",
            "value": 2.0
        },
        {
            "source": "MPriceListVersion",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MRfQLine",
            "target": "X_C_RfQLine",
            "value": 13.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_InvoicePaySchedule",
            "value": 1.0
        },
        {
            "source": "MIndexStop",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "InventoryCountCreate",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "ProjectIssue",
            "target": "MProject",
            "value": 3.0
        },
        {
            "source": "ImportPayment",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNodeCMM",
            "value": 0.5
        },
        {
            "source": "MPaymentTerm",
            "target": "MInvoice",
            "value": 1.0
        },
        {
            "source": "MAttributeUse",
            "target": "X_M_AttributeUse",
            "value": 2.5
        },
        {
            "source": "MProject",
            "target": "X_C_ProjectPhase",
            "value": 2.0
        },
        {
            "source": "StorageCleanup",
            "target": "X_M_Storage",
            "value": 12.0
        },
        {
            "source": "MPriceListVersion",
            "target": "MPriceList",
            "value": 1.5
        },
        {
            "source": "MAttributeSetInstance",
            "target": "MLotCtl",
            "value": 0.5
        },
        {
            "source": "MMeasure",
            "target": "X_PA_Achievement",
            "value": 1.5
        },
        {
            "source": "FinStatement",
            "target": "DB",
            "value": 3.5
        },
        {
            "source": "MField",
            "target": "X_AD_Field",
            "value": 2.0
        },
        {
            "source": "MMedia",
            "target": "X_CM_Media",
            "value": 5.5
        },
        {
            "source": "EntityTypeRegister",
            "target": "EntityTypeRegister",
            "value": 0.5
        },
        {
            "source": "MTreeNodeMM",
            "target": "X_AD_TreeNodeMM",
            "value": 2.0
        },
        {
            "source": "MInvoice",
            "target": "MMatchInv",
            "value": 0.5
        },
        {
            "source": "RegisterSystem",
            "target": "M_Registration",
            "value": 0.5
        },
        {
            "source": "MJournalBatch",
            "target": "X_GL_Journal",
            "value": 19.0
        },
        {
            "source": "StorageCleanup",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "Tax",
            "target": "MTax",
            "value": 1.0
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "MPaySelectionLine",
            "value": 0.5
        },
        {
            "source": "ImportOrder",
            "target": "MUser",
            "value": 1.0
        },
        {
            "source": "FilePart",
            "target": "PartBase",
            "value": 2.0
        },
        {
            "source": "GridWorkbench",
            "target": "GridWindow",
            "value": 3.0
        },
        {
            "source": "BOMValidate",
            "target": "MBOMProduct",
            "value": 1.0
        },
        {
            "source": "MBankStatementMatcher",
            "target": "MBankStatementMatcher",
            "value": 1.0
        },
        {
            "source": "MTreeNodeBP",
            "target": "X_AD_TreeNodeBP",
            "value": 2.0
        },
        {
            "source": "VolumeTest",
            "target": "MOrderLine",
            "value": 1.5
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "X_C_PaySchedule",
            "value": 1.0
        },
        {
            "source": "WebSessionCtx",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "b",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MMovementLineMA",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MLdapProcessor",
            "target": "MLdapProcessor",
            "value": 4.5
        },
        {
            "source": "MInOut",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "PP_PayFlowPro",
            "target": "X_C_PaymentProcessor",
            "value": 5.0
        },
        {
            "source": "MMovement",
            "target": "MLocator",
            "value": 1.0
        },
        {
            "source": "LanguageMaintenance",
            "target": "X_AD_Language",
            "value": 2.0
        },
        {
            "source": "MRequisition",
            "target": "X_M_PriceList",
            "value": 1.0
        },
        {
            "source": "MMatchPO",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MJournalBatch",
            "target": "MPeriod",
            "value": 3.5
        },
        {
            "source": "GridField",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MAttributeSet",
            "value": 1.0
        },
        {
            "source": "MInvoiceLine",
            "target": "MBPartnerLocation",
            "value": 0.5
        },
        {
            "source": "MAssignmentSlot",
            "target": "MAssignmentSlot",
            "value": 17.0
        },
        {
            "source": "MAcctProcessor",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "AllocationReset",
            "target": "AllocationReset",
            "value": 1.0
        },
        {
            "source": "InOutGenerate",
            "target": "X_M_InOutLine",
            "value": 5.5
        },
        {
            "source": "MJournal",
            "target": "MSalesRegion",
            "value": 0.5
        },
        {
            "source": "CostUpdate",
            "target": "X_C_AcctSchema",
            "value": 4.0
        },
        {
            "source": "TableCreateColumns",
            "target": "TableCreateColumns",
            "value": 1.5
        },
        {
            "source": "MBOM",
            "target": "MBOM",
            "value": 1.0
        },
        {
            "source": "ProjectIssue",
            "target": "MProjectIssue",
            "value": 6.0
        },
        {
            "source": "MBPartnerProduct",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MBPGroup",
            "target": "X_C_BP_Group",
            "value": 3.5
        },
        {
            "source": "MPayment",
            "target": "MPaySelectionCheck",
            "value": 0.5
        },
        {
            "source": "ProjectIssue",
            "target": "MTimeExpense",
            "value": 1.0
        },
        {
            "source": "MDunningRunLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "BankStatementMatcher",
            "target": "BankStatementMatcher",
            "value": 2.0
        },
        {
            "source": "MTImpFormat",
            "target": "X_T_ImpFormat",
            "value": 2.0
        },
        {
            "source": "AllocationAuto",
            "target": "MInvoice",
            "value": 1.0
        },
        {
            "source": "MMovement",
            "target": "X_C_DocType",
            "value": 2.5
        },
        {
            "source": "MChat",
            "target": "b",
            "value": 2.0
        },
        {
            "source": "VolumeTest",
            "target": "MBPartnerLocation",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "DB",
            "value": 2.5
        },
        {
            "source": "MResourceAssignment",
            "target": "X_S_ResourceAssignment",
            "value": 6.5
        },
        {
            "source": "MCStage",
            "target": "X_CM_CStageTTable",
            "value": 3.5
        },
        {
            "source": "ImportBPartner",
            "target": "X_C_BPartner",
            "value": 6.0
        },
        {
            "source": "MPayment",
            "target": "Util",
            "value": 1.0
        },
        {
            "source": "CommissionCalc",
            "target": "CommissionCalc",
            "value": 1.0
        },
        {
            "source": "MMeasureCalc",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MProjectIssue",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "OrderPOCreate",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "PriceListCreate",
            "target": "MProductPO",
            "value": 0.5
        },
        {
            "source": "MCashLine",
            "target": "MInvoice",
            "value": 1.5
        },
        {
            "source": "MInvoice",
            "target": "MDocTypeCounter",
            "value": 1.0
        },
        {
            "source": "MCostDetail",
            "target": "X_M_CostQueue",
            "value": 1.0
        },
        {
            "source": "MContactInterest",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "ProductCost",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "MDocBaseType",
            "target": "X_C_DocBaseType",
            "value": 2.0
        },
        {
            "source": "UIFieldVOFactory",
            "target": "UIFieldVOFT",
            "value": 2.0
        },
        {
            "source": "BOMValidate",
            "target": "X_M_Product",
            "value": 12.5
        },
        {
            "source": "MMediaServer",
            "target": "X_CM_WebProject",
            "value": 0.5
        },
        {
            "source": "MProductCategory",
            "target": "MProductCategory",
            "value": 1.5
        },
        {
            "source": "MSLAGoal",
            "target": "X_PA_SLA_Goal",
            "value": 6.0
        },
        {
            "source": "MAllocationHdr",
            "target": "X_C_AllocationHdr",
            "value": 37.0
        },
        {
            "source": "MInventoryLine",
            "target": "Msg",
            "value": 1.5
        },
        {
            "source": "MChatEntry",
            "target": "X_CM_ChatEntry",
            "value": 10.0
        },
        {
            "source": "PP_PayPal",
            "target": "PaymentProcessor",
            "value": 2.0
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "X_C_PaySelectionCheck",
            "value": 2.0
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_M_Requisition",
            "value": 1.5
        },
        {
            "source": "MWikiToken",
            "target": "X_CM_WikiToken",
            "value": 5.5
        },
        {
            "source": "ExpenseSOrder",
            "target": "MOrder",
            "value": 4.5
        },
        {
            "source": "MUOMConversion",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "ReportEngine",
            "value": 0.5
        },
        {
            "source": "BPartnerOrgLink",
            "target": "X_AD_Role_OrgAccess",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "MUOMConversion",
            "value": 5.5
        },
        {
            "source": "MRequisition",
            "target": "MUser",
            "value": 0.5
        },
        {
            "source": "Tax",
            "target": "X_C_Location",
            "value": 5.0
        },
        {
            "source": "MBPBankAccount",
            "target": "BankVerificationInterface",
            "value": 1.5
        },
        {
            "source": "MTemplate",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MPaySelectionLine",
            "target": "X_C_PaySelectionLine",
            "value": 18.0
        },
        {
            "source": "WebDoc",
            "target": "ElementAttributes",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "DB",
            "value": 6.5
        },
        {
            "source": "MProjectLine",
            "target": "MProjectTask",
            "value": 0.5
        },
        {
            "source": "MRequestCategory",
            "target": "X_R_Category",
            "value": 2.0
        },
        {
            "source": "FinStatement",
            "target": "MElementValue",
            "value": 2.0
        },
        {
            "source": "MUserRoles",
            "target": "X_AD_User_Roles",
            "value": 2.0
        },
        {
            "source": "ImportAccount",
            "target": "X_C_ElementValue",
            "value": 0.5
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "X_C_AcctSchema_Default",
            "value": 1.0
        },
        {
            "source": "MFactAccumulation",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMovement",
            "target": "X_M_Storage",
            "value": 5.5
        },
        {
            "source": "MRequest",
            "target": "MStatus",
            "value": 0.5
        },
        {
            "source": "MBOMProduct",
            "target": "CLogger",
            "value": 3.0
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_WF_Node",
            "value": 13.0
        },
        {
            "source": "GridWorkbench",
            "target": "Env",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_Project",
            "value": 1.5
        },
        {
            "source": "FinStatement",
            "target": "FinStatement",
            "value": 1.5
        },
        {
            "source": "MBank",
            "target": "MClientInfo",
            "value": 0.5
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "X_C_BPartner",
            "value": 1.0
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_Lead",
            "value": 6.5
        },
        {
            "source": "MPackage",
            "target": "MPackageLine",
            "value": 1.0
        },
        {
            "source": "MInventoryLine",
            "target": "MProduct",
            "value": 1.5
        },
        {
            "source": "head",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MInOutLine",
            "target": "MUOMConversion",
            "value": 2.0
        },
        {
            "source": "MRfQ",
            "target": "MRfQ",
            "value": 1.0
        },
        {
            "source": "CalloutOrder",
            "target": "MOrder",
            "value": 0.5
        },
        {
            "source": "ImportInvoice",
            "target": "X_I_Invoice",
            "value": 47.5
        },
        {
            "source": "MWFNode",
            "target": "Msg",
            "value": 4.5
        },
        {
            "source": "MCash",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "ImpFormatRow",
            "target": "Callout",
            "value": 1.5
        },
        {
            "source": "GridWorkbench",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "ReportEngine",
            "value": 0.5
        },
        {
            "source": "p",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MProductLocator",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "InOutGenerate",
            "target": "X_C_OrderLine",
            "value": 14.5
        },
        {
            "source": "ImpFormatRow",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MDocAction",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MMovement",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "MClickCount",
            "target": "X_W_ClickCount",
            "value": 4.0
        },
        {
            "source": "MOrderLine",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "MDunningRunLine",
            "target": "MConversionRate",
            "value": 2.5
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MPeriod",
            "value": 1.0
        },
        {
            "source": "MBankStatement",
            "target": "X_C_BankAccount",
            "value": 3.0
        },
        {
            "source": "MJournalBatch",
            "target": "MJournalBatch",
            "value": 14.5
        },
        {
            "source": "MCStageElement",
            "target": "X_CM_CStage",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_InvoiceLine",
            "value": 30.0
        },
        {
            "source": "MInventoryLine",
            "target": "CLogger",
            "value": 3.0
        },
        {
            "source": "MReportTree",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "AcctSchemaDefaultCopy",
            "target": "X_C_AcctSchema_Default",
            "value": 29.0
        },
        {
            "source": "WebInfo",
            "target": "WebUser",
            "value": 7.0
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNodeCMC",
            "value": 0.5
        },
        {
            "source": "DunningPrint",
            "target": "X_C_DunningRunEntry",
            "value": 5.5
        },
        {
            "source": "ReplicationRemote",
            "target": "MSystem",
            "value": 2.0
        },
        {
            "source": "MProjectPhase",
            "target": "X_C_ProjectTask",
            "value": 1.0
        },
        {
            "source": "EntityTypeRegister",
            "target": "MultipartRequestEntity",
            "value": 0.5
        },
        {
            "source": "ScheduleUtil",
            "target": "TimeUtil",
            "value": 8.0
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_InvoiceLine",
            "value": 92.0
        },
        {
            "source": "TranslationHandler",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "X_C_Tax",
            "value": 1.0
        },
        {
            "source": "MDistribution",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "MAsset",
            "value": 1.0
        },
        {
            "source": "ImportInvoice",
            "target": "MInvoiceLine",
            "value": 3.0
        },
        {
            "source": "MRegistration",
            "target": "X_A_RegistrationValue",
            "value": 1.0
        },
        {
            "source": "MMatchInv",
            "target": "MMatchPO",
            "value": 0.5
        },
        {
            "source": "InOutGenerate",
            "target": "InOutGenerate",
            "value": 5.0
        },
        {
            "source": "WebDoc",
            "target": "h1",
            "value": 0.5
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "X_C_InvoicePaySchedule",
            "value": 10.5
        },
        {
            "source": "StorageCleanup",
            "target": "X_M_MovementLine",
            "value": 3.0
        },
        {
            "source": "TranslationMgr",
            "target": "Document",
            "value": 2.5
        },
        {
            "source": "MAttributeSetInstance",
            "target": "X_M_Lot",
            "value": 2.5
        },
        {
            "source": "MPayment",
            "target": "MAllocationLine",
            "value": 5.0
        },
        {
            "source": "MPackageLine",
            "target": "X_M_InOutLine",
            "value": 1.0
        },
        {
            "source": "WebUser",
            "target": "X_AD_User",
            "value": 18.5
        },
        {
            "source": "PaymentProcessor",
            "target": "MPaymentProcessor",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "MDocType",
            "value": 2.0
        },
        {
            "source": "MBankStatementLoader",
            "target": "X_C_BankStatementLoader",
            "value": 2.5
        },
        {
            "source": "MOrderTax",
            "target": "Trx",
            "value": 0.5
        },
        {
            "source": "MLoginMsg",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MCostDetail",
            "target": "MCostQueue",
            "value": 1.5
        },
        {
            "source": "MInOutLine",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "Element",
            "target": "ElementRegistry",
            "value": 2.0
        },
        {
            "source": "ProjectGenOrder",
            "target": "X_C_ProjectLine",
            "value": 4.0
        },
        {
            "source": "MMovementConfirm",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "DunningPrint",
            "target": "MInvoice",
            "value": 0.5
        },
        {
            "source": "MGoal",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MMovementConfirm",
            "target": "X_M_MovementLine",
            "value": 3.0
        },
        {
            "source": "WebInfo",
            "target": "Ctx",
            "value": 9.5
        },
        {
            "source": "MRfQResponseLineQty",
            "target": "MRfQResponseLineQty",
            "value": 2.5
        },
        {
            "source": "MRfQTopicSubscriber",
            "target": "MRfQTopicSubscriber",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "Ctx",
            "value": 2.5
        },
        {
            "source": "WebProjectDeploy",
            "target": "X_AD_TreeNodeCMC",
            "value": 1.0
        },
        {
            "source": "ImportInvoice",
            "target": "MInvoice",
            "value": 3.0
        },
        {
            "source": "MLandedCost",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MTaxDeclarationLine",
            "target": "X_C_Invoice",
            "value": 4.5
        },
        {
            "source": "MPayment",
            "target": "MDocTypeCounter",
            "value": 1.0
        },
        {
            "source": "MTask",
            "target": "MTask",
            "value": 1.0
        },
        {
            "source": "hr",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MInvoice",
            "target": "MOrder",
            "value": 1.0
        },
        {
            "source": "MScheduler",
            "target": "ProcessInfo",
            "value": 7.0
        },
        {
            "source": "MRequest",
            "target": "X_R_Request",
            "value": 72.0
        },
        {
            "source": "MBankAccount",
            "target": "MBank",
            "value": 0.5
        },
        {
            "source": "MRequestType",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MCommissionDetail",
            "target": "X_C_CommissionDetail",
            "value": 8.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_InvoiceBatch",
            "value": 2.5
        },
        {
            "source": "MStatus",
            "target": "X_R_RequestType",
            "value": 1.0
        },
        {
            "source": "MAcctProcessor",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "ColumnSync",
            "target": "X_AD_Column",
            "value": 6.5
        },
        {
            "source": "ProjectIssue",
            "target": "X_C_ProjectLine",
            "value": 6.0
        },
        {
            "source": "MInOutLine",
            "target": "X_M_InOutConfirm",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "MUser",
            "value": 2.5
        },
        {
            "source": "ProjectGenOrder",
            "target": "MProject",
            "value": 0.5
        },
        {
            "source": "MRecurring",
            "target": "CLogger",
            "value": 2.5
        },
        {
            "source": "MWorkflowProcessorLog",
            "target": "X_AD_WorkflowProcessor",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "MOrderLine",
            "value": 4.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_PaySelection",
            "value": 5.5
        },
        {
            "source": "RfQCreatePO",
            "target": "MBPartner",
            "value": 1.0
        },
        {
            "source": "ExpenseSOrder",
            "target": "MProject",
            "value": 1.5
        },
        {
            "source": "MigrateData",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MWFEventAudit",
            "target": "MWFEventAudit",
            "value": 1.0
        },
        {
            "source": "MWindow",
            "target": "X_AD_Window",
            "value": 2.0
        },
        {
            "source": "MReturnPolicy",
            "target": "X_M_ReturnPolicy",
            "value": 4.0
        },
        {
            "source": "MWFNode",
            "target": "MWorkflow",
            "value": 2.5
        },
        {
            "source": "MWorkflow",
            "target": "MWFNodeNext",
            "value": 1.5
        },
        {
            "source": "OFXBankStatementHandler",
            "target": "OFX1ToXML",
            "value": 0.5
        },
        {
            "source": "GridTabVO",
            "target": "Evaluatee",
            "value": 2.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_PaymentBatch",
            "value": 1.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MOrderLine",
            "target": "Msg",
            "value": 12.5
        },
        {
            "source": "MOrderLine",
            "target": "MInOutLine",
            "value": 2.0
        },
        {
            "source": "MJournalBatch",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MReport",
            "target": "MReportColumnSet",
            "value": 2.5
        },
        {
            "source": "MInOutLine",
            "target": "X_M_Warehouse",
            "value": 2.0
        },
        {
            "source": "MNewsItem",
            "target": "X_CM_NewsChannel",
            "value": 1.0
        },
        {
            "source": "DistributionCreate",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "GridWorkbench",
            "target": "GridWorkbench",
            "value": 1.5
        },
        {
            "source": "MPriceListVersion",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MProductPrice",
            "target": "MProductPrice",
            "value": 1.5
        },
        {
            "source": "MWFActivity",
            "target": "Trx",
            "value": 4.0
        },
        {
            "source": "MGoal",
            "target": "MMeasure",
            "value": 1.0
        },
        {
            "source": "MRfQLineQty",
            "target": "X_C_UOM",
            "value": 0.5
        },
        {
            "source": "MPriceList",
            "target": "MPriceListVersion",
            "value": 1.5
        },
        {
            "source": "form",
            "target": "FormEvents",
            "value": 2.0
        },
        {
            "source": "InvoiceNGL",
            "target": "MFactAcct",
            "value": 0.5
        },
        {
            "source": "MAttributeSet",
            "target": "MAttributeSet",
            "value": 0.5
        },
        {
            "source": "MJournalBatch",
            "target": "MJournal",
            "value": 8.0
        },
        {
            "source": "MInOut",
            "target": "MInOutLineMA",
            "value": 2.0
        },
        {
            "source": "MDistributionList",
            "target": "MDistributionListLine",
            "value": 0.5
        },
        {
            "source": "MCash",
            "target": "X_C_CashLine",
            "value": 7.5
        },
        {
            "source": "MLdapProcessor",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "WebInfo",
            "target": "MAdvertisement",
            "value": 1.0
        },
        {
            "source": "MScheduler",
            "target": "X_AD_Process",
            "value": 4.5
        },
        {
            "source": "MCashLine",
            "target": "MCash",
            "value": 3.0
        },
        {
            "source": "MPeriod",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCashLine",
            "target": "MCashLine",
            "value": 8.0
        },
        {
            "source": "CacheHandler",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MMatchPO",
            "target": "MInOutLine",
            "value": 1.5
        },
        {
            "source": "MRfQResponseLine",
            "target": "X_C_RfQLineQty",
            "value": 0.5
        },
        {
            "source": "MCStage",
            "target": "MTemplate",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "X_M_Storage",
            "value": 1.0
        },
        {
            "source": "MInvoiceLine",
            "target": "MLandedCostAllocation",
            "value": 3.0
        },
        {
            "source": "ImportBPartner",
            "target": "MUser",
            "value": 2.0
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNodeMM",
            "value": 0.5
        },
        {
            "source": "DeepCopy",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MLot",
            "target": "KeyNamePair",
            "value": 0.5
        },
        {
            "source": "CalloutPayment",
            "target": "X_C_Currency",
            "value": 2.5
        },
        {
            "source": "ReplicationRemote",
            "target": "X_AD_System",
            "value": 1.5
        },
        {
            "source": "CalloutOrder",
            "target": "MOrderLine",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "MInvoice",
            "value": 1.0
        },
        {
            "source": "MProduct",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "MInvoice",
            "value": 40.0
        },
        {
            "source": "PriceListCreate",
            "target": "MDiscountSchema",
            "value": 0.5
        },
        {
            "source": "ImportLocator",
            "target": "DB",
            "value": 11.5
        },
        {
            "source": "MImage",
            "target": "MImage",
            "value": 1.0
        },
        {
            "source": "ProductCost",
            "target": "MUOMConversion",
            "value": 0.5
        },
        {
            "source": "MIndexColumn",
            "target": "MColumn",
            "value": 0.5
        },
        {
            "source": "MBank",
            "target": "MBank",
            "value": 1.0
        },
        {
            "source": "RequisitionPOCreate",
            "target": "MOrder",
            "value": 2.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_PaySelectionLine",
            "value": 11.0
        },
        {
            "source": "BankStatementPayment",
            "target": "MBankStatementLine",
            "value": 1.0
        },
        {
            "source": "MInventoryLineMA",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_C_DocTypeCounter",
            "value": 3.0
        },
        {
            "source": "MOrder",
            "target": "X_C_BPartner",
            "value": 9.0
        },
        {
            "source": "MAllocationLine",
            "target": "X_C_AllocationHdr",
            "value": 1.0
        },
        {
            "source": "MChangeRequest",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MTaxCategory",
            "target": "MTaxCategory",
            "value": 0.5
        },
        {
            "source": "ViewImportFromDB",
            "target": "X_AD_Table",
            "value": 0.5
        },
        {
            "source": "MAcctProcessorLog",
            "target": "X_C_AcctProcessor",
            "value": 0.5
        },
        {
            "source": "MConversionRate",
            "target": "X_C_Conversion_Rate",
            "value": 2.0
        },
        {
            "source": "MRfQLine",
            "target": "X_M_Product",
            "value": 2.0
        },
        {
            "source": "br",
            "target": "SinglePartElement",
            "value": 2.0
        },
        {
            "source": "MMovementLineMA",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInOutConfirm",
            "target": "MInOut",
            "value": 2.5
        },
        {
            "source": "MStorage",
            "target": "X_M_Storage",
            "value": 36.0
        },
        {
            "source": "MInvoice",
            "target": "CLogger",
            "value": 3.0
        },
        {
            "source": "MCommissionAmt",
            "target": "X_C_CommissionRun",
            "value": 1.0
        },
        {
            "source": "MLdapProcessor",
            "target": "MLdapUser",
            "value": 7.5
        },
        {
            "source": "TranslationMgr",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_BPartner_Location",
            "value": 2.0
        },
        {
            "source": "MCommissionDetail",
            "target": "MCommissionAmt",
            "value": 1.5
        },
        {
            "source": "DunningPrint",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "MWebProjectDomain",
            "target": "MWebProjectDomain",
            "value": 0.5
        },
        {
            "source": "ImportInvoice",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "MCommission",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MRfQLine",
            "target": "TimeUtil",
            "value": 1.5
        },
        {
            "source": "GridField",
            "target": "Evaluator",
            "value": 2.0
        },
        {
            "source": "MMovementLine",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "WebInfo",
            "target": "MRfQ",
            "value": 1.0
        },
        {
            "source": "GwtTest",
            "target": "ChangeVO",
            "value": 0.5
        },
        {
            "source": "MComponentReg",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "MRfQ",
            "value": 3.0
        },
        {
            "source": "MPaymentBatch",
            "target": "MPaymentBatch",
            "value": 0.5
        },
        {
            "source": "InOutGenerate",
            "target": "MProduct",
            "value": 1.0
        },
        {
            "source": "ReplicationLocal",
            "target": "X_AD_Replication",
            "value": 7.5
        },
        {
            "source": "MInterestArea",
            "target": "MContactInterest",
            "value": 2.0
        },
        {
            "source": "RfQResponseRank",
            "target": "MRfQ",
            "value": 2.0
        },
        {
            "source": "WebInfo",
            "target": "MInvoice",
            "value": 1.5
        },
        {
            "source": "MBOM",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MCost",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MStandardResponse",
            "target": "X_R_StandardResponse",
            "value": 2.0
        },
        {
            "source": "MMovement",
            "target": "X_M_Movement",
            "value": 32.5
        },
        {
            "source": "MAllocationHdr",
            "target": "X_C_Invoice",
            "value": 0.5
        },
        {
            "source": "MMeasureCalc",
            "target": "X_PA_MeasureCalc",
            "value": 11.0
        },
        {
            "source": "MJournal",
            "target": "MJournal",
            "value": 24.0
        },
        {
            "source": "MContainerElement",
            "target": "X_CM_Container",
            "value": 1.5
        },
        {
            "source": "ProjectIssue",
            "target": "MProjectLine",
            "value": 4.0
        },
        {
            "source": "UITabVO",
            "target": "VO",
            "value": 2.0
        },
        {
            "source": "th",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "RfQCreatePO",
            "target": "X_C_OrderLine",
            "value": 1.5
        },
        {
            "source": "MRequest",
            "target": "MGroup",
            "value": 0.5
        },
        {
            "source": "UITab",
            "target": "UITabVO",
            "value": 2.0
        },
        {
            "source": "TranslationHandler",
            "target": "Language",
            "value": 0.5
        },
        {
            "source": "MInterestArea",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MImage",
            "target": "X_AD_Image",
            "value": 5.0
        },
        {
            "source": "MRfQResponse",
            "target": "X_C_RfQLine",
            "value": 2.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "MPaySelectionCheck",
            "value": 4.5
        },
        {
            "source": "AssetDelivery",
            "target": "AssetDelivery",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "ChangeVO",
            "value": 5.0
        },
        {
            "source": "MTax",
            "target": "MTax",
            "value": 2.5
        },
        {
            "source": "MFactAccumulation",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MRfQTopic",
            "target": "X_C_RfQ_Topic",
            "value": 2.5
        },
        {
            "source": "MigrateData",
            "target": "MProductDownload",
            "value": 0.5
        },
        {
            "source": "MRfQLineQty",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "RfQResponseRank",
            "target": "X_C_RfQResponseLine",
            "value": 1.5
        },
        {
            "source": "VolumeTest",
            "target": "MDocType",
            "value": 0.5
        },
        {
            "source": "MComponentReg",
            "target": "MComponentReg",
            "value": 1.5
        },
        {
            "source": "WebDoc",
            "target": "form",
            "value": 1.0
        },
        {
            "source": "PP_PayFlowPro",
            "target": "MPayment",
            "value": 1.0
        },
        {
            "source": "MAllocationHdr",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "PP_Optimal",
            "target": "X_C_Payment",
            "value": 4.5
        },
        {
            "source": "DeliveryAccuracy",
            "target": "X_PA_SLA_Goal",
            "value": 4.5
        },
        {
            "source": "ImportInvoice",
            "target": "X_AD_User",
            "value": 2.5
        },
        {
            "source": "MWFResponsible",
            "target": "X_AD_WF_Responsible",
            "value": 13.5
        },
        {
            "source": "MRequestAction",
            "target": "X_R_RequestAction",
            "value": 3.5
        },
        {
            "source": "MReportTree",
            "target": "MTree",
            "value": 1.5
        },
        {
            "source": "MAchievement",
            "target": "MAchievement",
            "value": 2.0
        },
        {
            "source": "MOrderLine",
            "target": "ResponseVO",
            "value": 8.0
        },
        {
            "source": "TranslationMgr",
            "target": "Node",
            "value": 3.0
        },
        {
            "source": "ImportInventory",
            "target": "MAttributeSetInstance",
            "value": 1.5
        },
        {
            "source": "MPaySelectionLine",
            "target": "MInvoice",
            "value": 1.5
        },
        {
            "source": "InventoryCountCreate",
            "target": "CompiereSystemException",
            "value": 1.0
        },
        {
            "source": "MWarehousePrice",
            "target": "X_M_PriceList_Version",
            "value": 0.5
        },
        {
            "source": "MAllocationHdr",
            "target": "MAllocationHdr",
            "value": 20.0
        },
        {
            "source": "ResultTableCellRenderer",
            "target": "FieldType",
            "value": 1.0
        },
        {
            "source": "MMedia",
            "target": "X_CM_WebProject",
            "value": 1.0
        },
        {
            "source": "MReportLineSet",
            "target": "MReportLine",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "AssetDelivery",
            "target": "MUser",
            "value": 1.0
        },
        {
            "source": "MTreeNodeCMC",
            "target": "X_AD_TreeNodeCMC",
            "value": 2.0
        },
        {
            "source": "MInvoiceLine",
            "target": "MInvoiceLine",
            "value": 43.5
        },
        {
            "source": "PP_PayFlowPro",
            "target": "PaymentProcessor",
            "value": 8.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MInvoice",
            "value": 2.0
        },
        {
            "source": "MMovementLine",
            "target": "X_M_Movement",
            "value": 0.5
        },
        {
            "source": "MPAttributeLookup",
            "target": "Lookup",
            "value": 2.0
        },
        {
            "source": "MLot",
            "target": "X_M_LotCtl",
            "value": 0.5
        },
        {
            "source": "WebUser",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MProject",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MPayment",
            "target": "MPaymentValidate",
            "value": 5.0
        },
        {
            "source": "MCostUpdate",
            "target": "X_M_CostUpdate",
            "value": 4.0
        },
        {
            "source": "MBankStatement",
            "target": "X_C_Payment",
            "value": 1.0
        },
        {
            "source": "ProjectIssue",
            "target": "MInOut",
            "value": 1.0
        },
        {
            "source": "MProjectIssue",
            "target": "X_M_Transaction",
            "value": 0.5
        },
        {
            "source": "ScheduleUtil",
            "target": "MAssignmentSlot",
            "value": 21.5
        },
        {
            "source": "VolumeTest",
            "target": "MUser",
            "value": 2.5
        },
        {
            "source": "MAttributeValue",
            "target": "X_M_AttributeValue",
            "value": 2.5
        },
        {
            "source": "GridWindow",
            "target": "i",
            "value": 1.5
        },
        {
            "source": "MInvoice",
            "target": "X_M_BOMProduct",
            "value": 1.5
        },
        {
            "source": "MMailMsg",
            "target": "X_W_MailMsg",
            "value": 5.5
        },
        {
            "source": "ReplenishReport",
            "target": "MMovement",
            "value": 1.0
        },
        {
            "source": "MCost",
            "target": "CLogger",
            "value": 2.5
        },
        {
            "source": "MDocAction",
            "target": "MDocAction",
            "value": 3.0
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "MTimeExpenseLine",
            "value": 2.0
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "MAcctSchemaGL",
            "value": 1.5
        },
        {
            "source": "MAcctSchemaDefault",
            "target": "X_C_AcctSchema_Default",
            "value": 2.0
        },
        {
            "source": "ComponentProduct",
            "target": "X_M_Product",
            "value": 8.5
        },
        {
            "source": "ReplicationLocal",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MAsset",
            "target": "X_M_InOut",
            "value": 2.5
        },
        {
            "source": "MProjectIssue",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "ReplenishReport",
            "target": "X_M_Product",
            "value": 1.0
        },
        {
            "source": "MContactInterest",
            "target": "X_R_ContactInterest",
            "value": 8.0
        },
        {
            "source": "GenericElement",
            "target": "Element",
            "value": 2.0
        },
        {
            "source": "MInvoiceLine",
            "target": "ResponseVO",
            "value": 0.5
        },
        {
            "source": "MRequestProcessor",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "MCurrency",
            "value": 0.5
        },
        {
            "source": "MTemplate",
            "target": "CacheHandler",
            "value": 2.0
        },
        {
            "source": "GwtTest",
            "target": "UIWindow",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "MAttachment",
            "value": 1.0
        },
        {
            "source": "MIndexStop",
            "target": "MIndexStop",
            "value": 0.5
        },
        {
            "source": "MCash",
            "target": "MCashBook",
            "value": 2.0
        },
        {
            "source": "MStatus",
            "target": "X_R_Status",
            "value": 11.5
        },
        {
            "source": "MYear",
            "target": "Language",
            "value": 3.0
        },
        {
            "source": "MFactAccumulation",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "X_S_TimeExpenseLine",
            "value": 10.0
        },
        {
            "source": "MInventory",
            "target": "MTransaction",
            "value": 2.0
        },
        {
            "source": "MLead",
            "target": "X_R_Status",
            "value": 1.0
        },
        {
            "source": "MAsset",
            "target": "X_A_Asset_Group",
            "value": 1.0
        },
        {
            "source": "MRfQResponse",
            "target": "ReportEngine",
            "value": 0.5
        },
        {
            "source": "ReplicationLocal",
            "target": "X_AD_Replication_Log",
            "value": 2.0
        },
        {
            "source": "MCStage",
            "target": "X_CM_TemplateTable",
            "value": 2.5
        },
        {
            "source": "ImportContact",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MWebProjectDomain",
            "target": "X_CM_WebProject_Domain",
            "value": 2.0
        },
        {
            "source": "StringPart",
            "target": "PartBase",
            "value": 2.0
        },
        {
            "source": "BankStatementMatcher",
            "target": "MBankStatementLine",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "X_R_Status",
            "value": 6.5
        },
        {
            "source": "MPriceList",
            "target": "MPriceList",
            "value": 1.5
        },
        {
            "source": "MCampaign",
            "target": "MAccount",
            "value": 0.5
        },
        {
            "source": "MChatType",
            "target": "MChatType",
            "value": 0.5
        },
        {
            "source": "MReportLine",
            "target": "MAcctSchemaElement",
            "value": 0.5
        },
        {
            "source": "MPOS",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInOutLine",
            "target": "X_C_OrderLine",
            "value": 8.0
        },
        {
            "source": "MWFActivity",
            "target": "MNote",
            "value": 1.0
        },
        {
            "source": "MMedia",
            "target": "MWebProject",
            "value": 1.5
        },
        {
            "source": "Aging",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWFProcess",
            "target": "X_AD_WF_Node",
            "value": 0.5
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "X_C_InvoiceBatchLine",
            "value": 17.5
        },
        {
            "source": "MOrderLine",
            "target": "MResourceAssignment",
            "value": 0.5
        },
        {
            "source": "RModelData",
            "target": "KeyNamePair",
            "value": 0.5
        },
        {
            "source": "FinStatement",
            "target": "MClientInfo",
            "value": 0.5
        },
        {
            "source": "AssetDelivery",
            "target": "X_A_Asset",
            "value": 4.0
        },
        {
            "source": "MRequestType",
            "target": "MStatusCategory",
            "value": 1.0
        },
        {
            "source": "ChangeLogProcess",
            "target": "DB",
            "value": 3.0
        },
        {
            "source": "MRfQResponse",
            "target": "EMail",
            "value": 1.0
        },
        {
            "source": "MPeriod",
            "target": "X_AD_Org",
            "value": 1.5
        },
        {
            "source": "MInvoice",
            "target": "Ctx",
            "value": 3.0
        },
        {
            "source": "MCampaign",
            "target": "X_C_Campaign",
            "value": 3.5
        },
        {
            "source": "MTreeNodeCMM",
            "target": "X_AD_TreeNodeCMM",
            "value": 2.0
        },
        {
            "source": "MAssetGroup",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MMovementLine",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "Msg",
            "value": 3.0
        },
        {
            "source": "MLandedCost",
            "target": "X_C_LandedCost",
            "value": 10.0
        },
        {
            "source": "MSLACriteria",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "MAsset",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "AllocationAuto",
            "target": "MAllocationLine",
            "value": 0.5
        },
        {
            "source": "MDunningRunLine",
            "target": "X_C_DunningRunEntry",
            "value": 1.5
        },
        {
            "source": "MCostQueue",
            "target": "X_M_CostElement",
            "value": 1.0
        },
        {
            "source": "MInOutConfirm",
            "target": "X_M_InOut",
            "value": 5.5
        },
        {
            "source": "ProjectPhaseGenOrder",
            "target": "X_C_OrderLine",
            "value": 2.0
        },
        {
            "source": "MInOut",
            "target": "MInOutLine",
            "value": 9.5
        },
        {
            "source": "MInOut",
            "target": "MStorage",
            "value": 4.0
        },
        {
            "source": "MGLCategory",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "WebUser",
            "target": "MLocation",
            "value": 5.0
        },
        {
            "source": "MClick",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "FinStatement",
            "target": "Language",
            "value": 1.0
        },
        {
            "source": "MCost",
            "target": "Trx",
            "value": 2.0
        },
        {
            "source": "MRfQTopicSubscriber",
            "target": "X_C_RfQ_TopicSubscriberOnly",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_AD_User",
            "value": 1.5
        },
        {
            "source": "CalloutOrder",
            "target": "Ctx",
            "value": 18.0
        },
        {
            "source": "MDiscountSchemaLine",
            "target": "X_M_DiscountSchemaLine",
            "value": 2.0
        },
        {
            "source": "MAttributeSet",
            "target": "X_AD_Column",
            "value": 1.5
        },
        {
            "source": "BOMValidate",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MRequisitionLine",
            "target": "X_M_Requisition",
            "value": 1.5
        },
        {
            "source": "MTemplate",
            "target": "X_CM_WebProject",
            "value": 0.5
        },
        {
            "source": "InOutGenerate",
            "target": "MProductLocator",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MInvoiceLine",
            "value": 10.0
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_Location",
            "value": 4.0
        },
        {
            "source": "ReplenishReport",
            "target": "CompiereUserException",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_InvoiceTax",
            "value": 4.0
        },
        {
            "source": "MRegistrationAttribute",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MCashLine",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MPriceList",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "GridFieldVO",
            "target": "FieldVO",
            "value": 2.0
        },
        {
            "source": "RfQCopyLines",
            "target": "MRfQLineQty",
            "value": 0.5
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "ImportRequest",
            "target": "MRequest",
            "value": 0.5
        },
        {
            "source": "SLAGoalProcess",
            "target": "X_PA_SLA_Goal",
            "value": 2.5
        },
        {
            "source": "AllocationAuto",
            "target": "MAllocationHdr",
            "value": 1.5
        },
        {
            "source": "ProjectIssue",
            "target": "X_M_InOut",
            "value": 5.5
        },
        {
            "source": "MRequisition",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MPackageLine",
            "target": "X_M_PackageLine",
            "value": 4.0
        },
        {
            "source": "AllocationAuto",
            "target": "MPayment",
            "value": 1.5
        },
        {
            "source": "Task",
            "target": "Task",
            "value": 2.0
        },
        {
            "source": "MCommission",
            "target": "X_C_CommissionLine",
            "value": 0.5
        },
        {
            "source": "ImportContact",
            "target": "X_C_BPartner",
            "value": 1.0
        },
        {
            "source": "MDocTypeCounter",
            "target": "X_C_DocTypeCounter",
            "value": 18.5
        },
        {
            "source": "ImportInvoice",
            "target": "X_C_Location",
            "value": 2.0
        },
        {
            "source": "PriceListCreate",
            "target": "X_M_PriceList_Version",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "MProject",
            "value": 2.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "MRequisitionLine",
            "value": 1.0
        },
        {
            "source": "MRequestProcessor",
            "target": "X_R_RequestProcessor",
            "value": 8.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "X_AD_Org",
            "value": 2.0
        },
        {
            "source": "MPriceListVersion",
            "target": "MDiscountSchema",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MOrderLine",
            "value": 4.0
        },
        {
            "source": "ComponentProduct",
            "target": "MProductPO",
            "value": 0.5
        },
        {
            "source": "MRegistration",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MProduct",
            "target": "CLogger",
            "value": 2.0
        },
        {
            "source": "MJournal",
            "target": "X_AD_Org",
            "value": 1.0
        },
        {
            "source": "AllocationAuto",
            "target": "AllocationAuto",
            "value": 10.5
        },
        {
            "source": "MInOut",
            "target": "ResponseVO",
            "value": 0.5
        },
        {
            "source": "DistributionRun",
            "target": "MOrderLine",
            "value": 2.0
        },
        {
            "source": "MInvoice",
            "target": "MConversionRate",
            "value": 0.5
        },
        {
            "source": "ProjectIssue",
            "target": "MStorage",
            "value": 0.5
        },
        {
            "source": "TranslationMgr",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "X_C_Order",
            "value": 1.0
        },
        {
            "source": "MInvoiceLine",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "MReportTree",
            "target": "MReportTree",
            "value": 2.5
        },
        {
            "source": "MigrateData",
            "target": "Env",
            "value": 1.5
        },
        {
            "source": "DistributionCreate",
            "target": "X_C_BPartner",
            "value": 1.0
        },
        {
            "source": "MColorSchema",
            "target": "MPrintColor",
            "value": 0.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "Env",
            "value": 2.0
        },
        {
            "source": "MMatchPO",
            "target": "MOrderLine",
            "value": 4.0
        },
        {
            "source": "MLoginMsg",
            "target": "X_AD_LoginMsg",
            "value": 3.0
        },
        {
            "source": "MPaymentAllocate",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MProjectPhase",
            "target": "X_C_ProjectPhase",
            "value": 11.5
        },
        {
            "source": "ResultTableCellRenderer",
            "target": "DisplayType",
            "value": 1.0
        },
        {
            "source": "MCommissionAmt",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MOrderTax",
            "target": "MOrderLine",
            "value": 0.5
        },
        {
            "source": "MWFNodePara",
            "target": "X_AD_WF_Node_Para",
            "value": 4.5
        },
        {
            "source": "MCStage",
            "target": "MCStage",
            "value": 4.5
        },
        {
            "source": "MWorkflowProcessor",
            "target": "MWorkflowProcessorLog",
            "value": 0.5
        },
        {
            "source": "MRecurring",
            "target": "MOrder",
            "value": 0.5
        },
        {
            "source": "MIndexStop",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MProduct",
            "target": "MProductCategory",
            "value": 0.5
        },
        {
            "source": "MDistributionLine",
            "target": "MAccount",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_C_Order",
            "value": 172.0
        },
        {
            "source": "MInventoryLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInventory",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MWFNodeNext",
            "target": "X_AD_WF_NodeNext",
            "value": 9.5
        },
        {
            "source": "MBankStatement",
            "target": "X_C_BankStatementLine",
            "value": 11.0
        },
        {
            "source": "MInvoiceBatch",
            "target": "MInvoiceBatch",
            "value": 0.5
        },
        {
            "source": "GridField",
            "target": "FieldType",
            "value": 7.0
        },
        {
            "source": "CostUpdate",
            "target": "DB",
            "value": 3.0
        },
        {
            "source": "BOMValidate",
            "target": "BOMValidate",
            "value": 3.0
        },
        {
            "source": "MWebProject",
            "target": "MWebProject",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MCashLine",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "MPaymentTerm",
            "value": 2.0
        },
        {
            "source": "AllocationReset",
            "target": "Trx",
            "value": 4.0
        },
        {
            "source": "CalloutPayment",
            "target": "MDocType",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "X_AD_Client",
            "value": 1.0
        },
        {
            "source": "MIndexStop",
            "target": "X_K_IndexStop",
            "value": 3.5
        },
        {
            "source": "MUserMail",
            "target": "X_R_MailText",
            "value": 0.5
        },
        {
            "source": "MInOutLineMA",
            "target": "X_M_InOutLineMA",
            "value": 7.0
        },
        {
            "source": "MInventory",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInvoiceLine",
            "target": "Ctx",
            "value": 3.0
        },
        {
            "source": "MLdapProcessor",
            "target": "MAsset",
            "value": 1.0
        },
        {
            "source": "WebLogin",
            "target": "MBank",
            "value": 0.5
        },
        {
            "source": "MMatchPO",
            "target": "MInvoiceLine",
            "value": 1.5
        },
        {
            "source": "MProduct",
            "target": "X_M_Product_Category",
            "value": 2.5
        },
        {
            "source": "MCostQueue",
            "target": "X_M_Product",
            "value": 1.5
        },
        {
            "source": "MProductCosting",
            "target": "X_M_Product_Costing",
            "value": 10.0
        },
        {
            "source": "WebUser",
            "target": "Ctx",
            "value": 2.5
        },
        {
            "source": "MJournalLine",
            "target": "MJournal",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "MWarehouse",
            "value": 1.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "MBPartner",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "ChangeVO",
            "value": 1.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "RequisitionPOCreate",
            "value": 5.0
        },
        {
            "source": "MInvoiceBatch",
            "target": "X_C_InvoiceBatch",
            "value": 5.0
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "CompiereUserException",
            "value": 0.5
        },
        {
            "source": "ImportOrder",
            "target": "MOrderLine",
            "value": 6.0
        },
        {
            "source": "MCashLine",
            "target": "X_C_BankAccount",
            "value": 0.5
        },
        {
            "source": "MRfQResponseLineQty",
            "target": "X_C_RfQResponseLineQty",
            "value": 6.5
        },
        {
            "source": "MRecurring",
            "target": "MRecurring",
            "value": 1.0
        },
        {
            "source": "InOutGenerate",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "MCostDetail",
            "target": "MCostDetail",
            "value": 16.5
        },
        {
            "source": "MBank",
            "target": "BankVerificationInterface",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "Util",
            "value": 1.0
        },
        {
            "source": "MPInstance",
            "target": "X_AD_PInstance",
            "value": 2.0
        },
        {
            "source": "MPaymentAllocate",
            "target": "X_C_DocType",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "X_M_PriceList_Version",
            "value": 1.0
        },
        {
            "source": "MProduct",
            "target": "MProductCosting",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "X_C_BP_BankAccount",
            "value": 19.0
        },
        {
            "source": "MInvoiceTax",
            "target": "MInvoiceTax",
            "value": 3.0
        },
        {
            "source": "MPriceList",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MMovementConfirm",
            "target": "MInventory",
            "value": 3.0
        },
        {
            "source": "MInvoice",
            "target": "Msg",
            "value": 5.0
        },
        {
            "source": "MWFProcess",
            "target": "MWFResponsible",
            "value": 0.5
        },
        {
            "source": "AllocationReset",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "WebProjectDeploy",
            "target": "X_CM_CStage",
            "value": 2.5
        },
        {
            "source": "MReport",
            "target": "MReport",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MInOutLine",
            "value": 2.0
        },
        {
            "source": "MMatchInv",
            "target": "X_M_MatchPO",
            "value": 0.5
        },
        {
            "source": "MAccountLookup",
            "target": "Lookup",
            "value": 2.0
        },
        {
            "source": "MTimeExpenseLine",
            "target": "X_S_TimeExpenseLine",
            "value": 25.0
        },
        {
            "source": "MAttribute",
            "target": "MAttribute",
            "value": 0.5
        },
        {
            "source": "MMovementConfirm",
            "target": "X_M_MovementLineConfirm",
            "value": 6.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "MRoleOrgAccess",
            "value": 0.5
        },
        {
            "source": "MRfQLineQty",
            "target": "X_C_RfQLineQty",
            "value": 6.5
        },
        {
            "source": "GridField",
            "target": "Util",
            "value": 4.0
        },
        {
            "source": "MUOMConversion",
            "target": "MUOM",
            "value": 33.5
        },
        {
            "source": "MRfQTopic",
            "target": "MRfQTopicSubscriber",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "X_M_InOut",
            "value": 10.0
        },
        {
            "source": "MInOut",
            "target": "MInvoice",
            "value": 0.5
        },
        {
            "source": "ReplicationLocal",
            "target": "MReplicationLog",
            "value": 1.0
        },
        {
            "source": "ImportInventory",
            "target": "X_M_AttributeSetInstance",
            "value": 1.0
        },
        {
            "source": "LoadBankStatement",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "X_C_PaySelectionLine",
            "value": 3.5
        },
        {
            "source": "MCost",
            "target": "DB",
            "value": 5.5
        },
        {
            "source": "TranslationImportExport",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "WebUser",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "HttpMethodParams",
            "target": "DefaultHttpParams",
            "value": 2.0
        },
        {
            "source": "WebProjectDeploy",
            "target": "WebProjectDeploy",
            "value": 1.0
        },
        {
            "source": "MProjectType",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MInOut",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MAllocationLine",
            "target": "X_C_Invoice",
            "value": 4.5
        },
        {
            "source": "MRequisition",
            "target": "MPriceList",
            "value": 0.5
        },
        {
            "source": "ViewImportFromDB",
            "target": "CompiereSystemException",
            "value": 1.5
        },
        {
            "source": "ReplicationLocal",
            "target": "Trx",
            "value": 1.0
        },
        {
            "source": "ReplenishReport",
            "target": "X_C_Order",
            "value": 3.5
        },
        {
            "source": "RfQCreatePO",
            "target": "MRfQResponseLineQty",
            "value": 4.0
        },
        {
            "source": "MReportLine",
            "target": "MReportSource",
            "value": 2.0
        },
        {
            "source": "MProduct",
            "target": "MCost",
            "value": 0.5
        },
        {
            "source": "MAccessProfile",
            "target": "X_CM_AccessProfile",
            "value": 2.0
        },
        {
            "source": "MAttributeSetInstance",
            "target": "MSerNoCtl",
            "value": 1.0
        },
        {
            "source": "MDistributionList",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MUOMConversion",
            "target": "MUOMConversion",
            "value": 6.0
        },
        {
            "source": "MStorage",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "AllocationAuto",
            "target": "CompiereSystemException",
            "value": 1.0
        },
        {
            "source": "GridWindow",
            "target": "MColor",
            "value": 1.0
        },
        {
            "source": "MChat",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "MWFProcess",
            "target": "X_AD_WF_NodeNext",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MOrderLine",
            "value": 0.5
        },
        {
            "source": "MAllocationHdr",
            "target": "MPayment",
            "value": 0.5
        },
        {
            "source": "DeliveryAccuracy",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MTimeExpenseLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MPaymentTerm",
            "target": "MInvoicePaySchedule",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "MProcess",
            "value": 0.5
        },
        {
            "source": "MImpFormat",
            "target": "MImpFormatRow",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "MBPartner",
            "value": 2.0
        },
        {
            "source": "MDunningRunLine",
            "target": "MPayment",
            "value": 1.5
        },
        {
            "source": "MWorkflowAccess",
            "target": "X_AD_Workflow",
            "value": 0.5
        },
        {
            "source": "ImportInventory",
            "target": "X_M_InventoryLine",
            "value": 1.0
        },
        {
            "source": "MRfQLine",
            "target": "MRfQLineQty",
            "value": 1.0
        },
        {
            "source": "ComponentProduct",
            "target": "CompiereSystemException",
            "value": 2.5
        },
        {
            "source": "MOrderTax",
            "target": "X_C_OrderLine",
            "value": 2.0
        },
        {
            "source": "GridWindow",
            "target": "p",
            "value": 9.0
        },
        {
            "source": "ImportConversionRate",
            "target": "X_C_Conversion_Rate",
            "value": 1.5
        },
        {
            "source": "RfQResponseRank",
            "target": "MRfQLineQty",
            "value": 0.5
        },
        {
            "source": "RfQCreatePO",
            "target": "X_C_RfQLineQty",
            "value": 3.0
        },
        {
            "source": "MShipper",
            "target": "X_M_Shipper",
            "value": 2.0
        },
        {
            "source": "MAllocationHdr",
            "target": "MAllocationLine",
            "value": 3.5
        },
        {
            "source": "MMatchInv",
            "target": "X_M_MatchInv",
            "value": 15.0
        },
        {
            "source": "WebSessionCtx",
            "target": "Language",
            "value": 3.0
        },
        {
            "source": "MWFEventAudit",
            "target": "X_AD_WF_EventAudit",
            "value": 8.0
        },
        {
            "source": "MTableIndex",
            "target": "MTableIndex",
            "value": 4.5
        },
        {
            "source": "ColumnSync",
            "target": "CompiereUserException",
            "value": 3.5
        },
        {
            "source": "MWFNodePara",
            "target": "MProcessPara",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "MBPartnerLocation",
            "value": 0.5
        },
        {
            "source": "MWFProcess",
            "target": "StateEngine",
            "value": 11.5
        },
        {
            "source": "MInventoryLine",
            "target": "X_M_Inventory",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "X_C_Currency",
            "value": 2.5
        },
        {
            "source": "MMediaServer",
            "target": "FTP",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "MWFActivity",
            "value": 40.5
        },
        {
            "source": "MRfQTopicSubscriber",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MProductLocator",
            "value": 1.0
        },
        {
            "source": "MAllocationLine",
            "target": "MInvoice",
            "value": 2.0
        },
        {
            "source": "DunningPrint",
            "target": "MMailText",
            "value": 3.5
        },
        {
            "source": "MGoal",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MPriceListVersion",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MProjectLine",
            "target": "X_C_ProjectLine",
            "value": 31.5
        },
        {
            "source": "MBankStatement",
            "target": "MFactAcct",
            "value": 0.5
        },
        {
            "source": "MAlertProcessor",
            "target": "MAlertProcessorLog",
            "value": 0.5
        },
        {
            "source": "MOrderTax",
            "target": "MTax",
            "value": 2.5
        },
        {
            "source": "MContactInterest",
            "target": "X_R_Source",
            "value": 3.0
        },
        {
            "source": "MCostDetail",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "WebDoc",
            "target": "b",
            "value": 0.5
        },
        {
            "source": "MMovement",
            "target": "MStorage",
            "value": 2.0
        },
        {
            "source": "MRfQResponseLine",
            "target": "X_C_RfQResponseLine",
            "value": 14.5
        },
        {
            "source": "CalloutOrder",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "MFieldGroup",
            "target": "X_AD_FieldGroup",
            "value": 2.5
        },
        {
            "source": "MTax",
            "target": "X_C_Tax",
            "value": 16.0
        },
        {
            "source": "MPayment",
            "target": "MAllocationHdr",
            "value": 3.5
        },
        {
            "source": "MOrder",
            "target": "X_C_OrderTax",
            "value": 4.0
        },
        {
            "source": "MScheduler",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MRequestUpdate",
            "target": "X_R_Request",
            "value": 4.0
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "MAcctSchema",
            "value": 0.5
        },
        {
            "source": "MStorage",
            "target": "DB",
            "value": 6.5
        },
        {
            "source": "DistributionCreate",
            "target": "MOrderLine",
            "value": 2.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "X_M_Warehouse",
            "value": 0.5
        },
        {
            "source": "MImpFormatRow",
            "target": "X_AD_ImpFormat",
            "value": 1.0
        },
        {
            "source": "MDocAction",
            "target": "MDocBaseType",
            "value": 0.5
        },
        {
            "source": "MLandedCost",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MClick",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MLdapProcessorLog",
            "target": "CompiereProcessorLog",
            "value": 2.0
        },
        {
            "source": "DocWorkflowManager",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MGoal",
            "target": "MGoal",
            "value": 9.0
        },
        {
            "source": "MDiscountSchema",
            "target": "TimeUtil",
            "value": 0.5
        },
        {
            "source": "MChatEntry",
            "target": "X_CM_Chat",
            "value": 1.0
        },
        {
            "source": "MWorkflow",
            "target": "X_AD_WF_NodeNext",
            "value": 6.5
        },
        {
            "source": "MUserQuery",
            "target": "X_AD_UserQuery",
            "value": 2.0
        },
        {
            "source": "MDunningRun",
            "target": "MDunningRun",
            "value": 1.5
        },
        {
            "source": "ImportInvoice",
            "target": "X_C_InvoiceLine",
            "value": 3.5
        },
        {
            "source": "FastByteArrayOutputStream",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPeriod",
            "target": "X_C_PeriodControl",
            "value": 0.5
        },
        {
            "source": "MBPartner",
            "target": "Util",
            "value": 7.5
        },
        {
            "source": "MInvoiceTax",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MWorkflow",
            "target": "MWFProcess",
            "value": 1.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_User",
            "value": 10.0
        },
        {
            "source": "ImportRequest",
            "target": "DB",
            "value": 36.5
        },
        {
            "source": "TranslationMgr",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MIndexColumn",
            "target": "X_AD_TableIndex",
            "value": 0.5
        },
        {
            "source": "ReplenishReport",
            "target": "X_M_Requisition",
            "value": 3.0
        },
        {
            "source": "MPeriod",
            "target": "MPeriodControl",
            "value": 2.0
        },
        {
            "source": "td",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MTaxCategory",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "BankStatementPayment",
            "target": "X_C_BankStatementLine",
            "value": 2.0
        },
        {
            "source": "MDocActionRule",
            "target": "Util",
            "value": 1.0
        },
        {
            "source": "PriceListCreate",
            "target": "X_M_DiscountSchemaLine",
            "value": 7.5
        },
        {
            "source": "RfQCreateSO",
            "target": "MOrder",
            "value": 2.0
        },
        {
            "source": "WebUser",
            "target": "X_C_BPartner_Location",
            "value": 4.5
        },
        {
            "source": "MigrateData",
            "target": "X_M_ProductDownload",
            "value": 1.5
        },
        {
            "source": "MContainer",
            "target": "X_CM_CStage",
            "value": 2.0
        },
        {
            "source": "MMovement",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "VolumeTest",
            "target": "ProcessInfo",
            "value": 4.5
        },
        {
            "source": "MRfQResponse",
            "target": "X_C_RfQ",
            "value": 2.5
        },
        {
            "source": "StorageCleanup",
            "target": "StorageCleanup",
            "value": 1.0
        },
        {
            "source": "MMediaDeploy",
            "target": "X_CM_MediaDeploy",
            "value": 6.5
        },
        {
            "source": "MPaymentBatch",
            "target": "X_C_PaymentBatch",
            "value": 4.0
        },
        {
            "source": "CostUpdate",
            "target": "CompiereUserException",
            "value": 3.0
        },
        {
            "source": "MLdapProcessor",
            "target": "MAssetDelivery",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "X_C_Invoice",
            "value": 12.0
        },
        {
            "source": "MRequisition",
            "target": "X_C_OrderLine",
            "value": 0.5
        },
        {
            "source": "MAdvertisement",
            "target": "X_W_ClickCount",
            "value": 1.0
        },
        {
            "source": "a",
            "target": "FocusEvents",
            "value": 2.0
        },
        {
            "source": "WebInfo",
            "target": "X_C_RfQ",
            "value": 1.5
        },
        {
            "source": "MPaySelectionLine",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MCalendar",
            "target": "X_AD_ClientInfo",
            "value": 0.5
        },
        {
            "source": "MTableIndex",
            "target": "X_AD_Table",
            "value": 1.5
        },
        {
            "source": "MSchedulerPara",
            "target": "MSchedulerPara",
            "value": 0.5
        },
        {
            "source": "MBPartner",
            "target": "MBPartnerLocation",
            "value": 1.0
        },
        {
            "source": "WebLogin",
            "target": "X_C_BP_BankAccount",
            "value": 3.5
        },
        {
            "source": "MCStage",
            "target": "X_CM_WebProject",
            "value": 2.5
        },
        {
            "source": "DistributionRun",
            "target": "MOrgInfo",
            "value": 1.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "X_AD_OrgInfo",
            "value": 1.5
        },
        {
            "source": "MCStageElement",
            "target": "MCStage",
            "value": 1.5
        },
        {
            "source": "ColumnSync",
            "target": "MColumn",
            "value": 3.0
        },
        {
            "source": "MPOSKeyLayout",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_PInstance_Para",
            "value": 2.0
        },
        {
            "source": "MProductCategoryAcct",
            "target": "MProductCategoryAcct",
            "value": 1.0
        },
        {
            "source": "MAdvertisement",
            "target": "MCounterCount",
            "value": 1.5
        },
        {
            "source": "DeepCopy",
            "target": "FastByteArrayOutputStream",
            "value": 1.0
        },
        {
            "source": "MPackage",
            "target": "X_M_InOut",
            "value": 0.5
        },
        {
            "source": "MDistributionLine",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_Cash",
            "value": 0.5
        },
        {
            "source": "OFX1ToXML",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "MAcctSchemaDefault",
            "value": 1.5
        },
        {
            "source": "MMeasureCalc",
            "target": "Query",
            "value": 2.5
        },
        {
            "source": "MTab",
            "target": "X_AD_Tab",
            "value": 2.0
        },
        {
            "source": "ChangeLogProcess",
            "target": "ChangeLogProcess",
            "value": 5.0
        },
        {
            "source": "ImportLocator",
            "target": "MProductLocator",
            "value": 0.5
        },
        {
            "source": "MReportView",
            "target": "X_AD_ReportView",
            "value": 2.0
        },
        {
            "source": "MReturnPolicy",
            "target": "MReturnPolicy",
            "value": 1.0
        },
        {
            "source": "InvoiceNGL",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "StorageCleanup",
            "target": "MStorage",
            "value": 4.0
        },
        {
            "source": "InOutGenerate",
            "target": "X_M_Storage",
            "value": 3.5
        },
        {
            "source": "MMovementLine",
            "target": "MMovementLine",
            "value": 1.5
        },
        {
            "source": "PP_PayFlowPro",
            "target": "MPaymentValidate",
            "value": 0.5
        },
        {
            "source": "FileUpload",
            "target": "FileUpload",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "X_M_Product",
            "value": 3.0
        },
        {
            "source": "TableCreateColumns",
            "target": "Trx",
            "value": 0.5
        },
        {
            "source": "MBankStatement",
            "target": "Msg",
            "value": 2.5
        },
        {
            "source": "InOutGenerate",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MAllocationLine",
            "target": "X_C_Payment",
            "value": 1.5
        },
        {
            "source": "MYear",
            "target": "X_C_Year",
            "value": 4.5
        },
        {
            "source": "GridWindow",
            "target": "WebDoc",
            "value": 2.0
        },
        {
            "source": "WebInfo",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "MTax",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MAttributeSetInstance",
            "target": "X_M_AttributeInstance",
            "value": 2.0
        },
        {
            "source": "MWFNode",
            "target": "MWFNode",
            "value": 6.0
        },
        {
            "source": "OFXFileBankStatementLoader",
            "target": "OFXBankStatementHandler",
            "value": 3.5
        },
        {
            "source": "MColor",
            "target": "X_AD_Color",
            "value": 3.0
        },
        {
            "source": "ProjectIssue",
            "target": "X_C_ProjectIssue",
            "value": 14.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "CompiereUserException",
            "value": 1.0
        },
        {
            "source": "CopyImportFormat",
            "target": "MImpFormatRow",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "MStandardResponse",
            "value": 0.5
        },
        {
            "source": "MBankStatementMatcher",
            "target": "X_C_BankStatementMatcher",
            "value": 2.0
        },
        {
            "source": "MStatusCategory",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "InventoryCountCreate",
            "target": "MInventoryLineMA",
            "value": 1.0
        },
        {
            "source": "MOrderTax",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "HttpMethodBase",
            "target": "HttpMethod",
            "value": 2.0
        },
        {
            "source": "MInOut",
            "target": "MOrgInfo",
            "value": 0.5
        },
        {
            "source": "MRequestProcessor",
            "target": "MRequestProcessor",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MInvoiceLine",
            "value": 0.5
        },
        {
            "source": "ProjectIssue",
            "target": "X_M_InOutLine",
            "value": 5.5
        },
        {
            "source": "MRequest",
            "target": "X_R_RequestType",
            "value": 3.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MRequest",
            "value": 0.5
        },
        {
            "source": "MMailText",
            "target": "X_R_MailText",
            "value": 4.5
        },
        {
            "source": "MPayment",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MComponentRegUpdate",
            "target": "X_AD_ComponentRegUpdate",
            "value": 7.5
        },
        {
            "source": "MChangeRequest",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "DistributionCreate",
            "target": "X_C_OrderLine",
            "value": 1.0
        },
        {
            "source": "SinglePartElement",
            "target": "ConcreteElement",
            "value": 2.0
        },
        {
            "source": "MPaymentAllocate",
            "target": "MPaymentAllocate",
            "value": 4.0
        },
        {
            "source": "MClick",
            "target": "MClick",
            "value": 2.5
        },
        {
            "source": "MProduct",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "ImportInvoice",
            "target": "MLocation",
            "value": 2.0
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_LandedCostAllocation",
            "value": 9.0
        },
        {
            "source": "MFactAccumulation",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MPeriod",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "link",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MWikiToken",
            "target": "MMedia",
            "value": 0.5
        },
        {
            "source": "GridWindow",
            "target": "MSession",
            "value": 0.5
        },
        {
            "source": "MLoginMsg",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MRfQ",
            "target": "X_C_RfQ",
            "value": 18.5
        },
        {
            "source": "WebSessionCtx",
            "target": "MStore",
            "value": 2.5
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNodeCMS",
            "value": 0.5
        },
        {
            "source": "MKCategory",
            "target": "X_K_Category",
            "value": 2.0
        },
        {
            "source": "EntityTypeRegister",
            "target": "CompiereUserException",
            "value": 1.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "MPaySelection",
            "value": 3.5
        },
        {
            "source": "WebDoc",
            "target": "head",
            "value": 6.0
        },
        {
            "source": "MProject",
            "target": "MProjectPhase",
            "value": 2.5
        },
        {
            "source": "MBPBankAccount",
            "target": "X_C_Bank",
            "value": 0.5
        },
        {
            "source": "MAd",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MBPartner",
            "target": "X_C_BPartner",
            "value": 41.5
        },
        {
            "source": "AcctSchemaCopyAcct",
            "target": "X_C_AcctSchema_Element",
            "value": 1.0
        },
        {
            "source": "MTimeExpense",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "MMatchInv",
            "value": 0.5
        },
        {
            "source": "MInfoWindow",
            "target": "X_AD_InfoWindow",
            "value": 4.0
        },
        {
            "source": "GwtTest",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MDataMigration",
            "target": "MDataMigrationEntry",
            "value": 0.5
        },
        {
            "source": "RfQCreateSO",
            "target": "MRfQ",
            "value": 0.5
        },
        {
            "source": "MDunningRunLine",
            "target": "MDunningRunLine",
            "value": 7.0
        },
        {
            "source": "MProductPO",
            "target": "X_M_Product_PO",
            "value": 2.5
        },
        {
            "source": "MRequest",
            "target": "X_AD_Menu",
            "value": 0.5
        },
        {
            "source": "MWithholding",
            "target": "X_C_Withholding",
            "value": 2.0
        },
        {
            "source": "MAsset",
            "target": "X_M_AttributeSetInstance",
            "value": 1.5
        },
        {
            "source": "MInfoColumn",
            "target": "X_AD_InfoColumn",
            "value": 8.0
        },
        {
            "source": "ImportBankStatement",
            "target": "X_C_BankStatement",
            "value": 6.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MLocation",
            "value": 0.5
        },
        {
            "source": "MTimeExpense",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "MAlertRule",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MIndex",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MBOMProduct",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "ImportContact",
            "target": "X_C_Lead",
            "value": 1.5
        },
        {
            "source": "MLoginMsg",
            "target": "LoginMsgInterface",
            "value": 2.0
        },
        {
            "source": "MGoal",
            "target": "X_PA_Measure",
            "value": 1.5
        },
        {
            "source": "MInvoice",
            "target": "X_C_AllocationLine",
            "value": 1.0
        },
        {
            "source": "MColor",
            "target": "CompiereColor",
            "value": 2.0
        },
        {
            "source": "MRequest",
            "target": "X_R_Group",
            "value": 3.5
        },
        {
            "source": "MGoal",
            "target": "X_PA_Goal",
            "value": 19.5
        },
        {
            "source": "MBPartner",
            "target": "MBPBankAccount",
            "value": 0.5
        },
        {
            "source": "MProductBOM",
            "target": "X_M_Product",
            "value": 1.5
        },
        {
            "source": "RfQCreateSO",
            "target": "X_C_RfQLine",
            "value": 1.0
        },
        {
            "source": "GridWindow",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMediaDeploy",
            "target": "X_CM_Media_Server",
            "value": 0.5
        },
        {
            "source": "label",
            "target": "PageEvents",
            "value": 2.0
        },
        {
            "source": "MCashLine",
            "target": "MOrder",
            "value": 0.5
        },
        {
            "source": "ImportPayment",
            "target": "X_C_Payment",
            "value": 14.5
        },
        {
            "source": "MWorkflow",
            "target": "MWorkflowAccess",
            "value": 0.5
        },
        {
            "source": "MWarehousePrice",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "TranslationMgr",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MAllocationHdr",
            "target": "Msg",
            "value": 1.5
        },
        {
            "source": "ExpenseSOrder",
            "target": "MTimeExpense",
            "value": 1.0
        },
        {
            "source": "MWFNodePara",
            "target": "X_AD_Process_Para",
            "value": 1.5
        },
        {
            "source": "MRequestType",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MTaxDeclarationAcct",
            "target": "X_C_TaxDeclaration",
            "value": 0.5
        },
        {
            "source": "MPOS",
            "target": "MPOS",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "X_R_RequestType",
            "value": 1.5
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "MPaySelection",
            "value": 0.5
        },
        {
            "source": "OFXFileBankStatementLoader",
            "target": "X_C_BankStatementLoader",
            "value": 1.0
        },
        {
            "source": "MProjectTask",
            "target": "X_C_Task",
            "value": 4.0
        },
        {
            "source": "VolumeTest",
            "target": "MPInstance",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MInOut",
            "value": 27.5
        },
        {
            "source": "MPaymentTerm",
            "target": "Msg",
            "value": 2.0
        },
        {
            "source": "MInOutConfirm",
            "target": "MInOutConfirm",
            "value": 11.0
        },
        {
            "source": "MGLCategory",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "X_C_InvoiceLine",
            "value": 3.5
        },
        {
            "source": "MRequestProcessorLog",
            "target": "CompiereProcessorLog",
            "value": 2.0
        },
        {
            "source": "MMovementConfirm",
            "target": "X_M_Locator",
            "value": 1.0
        },
        {
            "source": "CalloutOrder",
            "target": "MUOMConversion",
            "value": 5.5
        },
        {
            "source": "MUOMConversion",
            "target": "CLogger",
            "value": 3.0
        },
        {
            "source": "MWebProject",
            "target": "X_CM_WebProject",
            "value": 6.0
        },
        {
            "source": "MIndexColumn",
            "target": "X_AD_IndexColumn",
            "value": 4.0
        },
        {
            "source": "ReplenishReport",
            "target": "CompiereSystemException",
            "value": 1.0
        },
        {
            "source": "WebInfo",
            "target": "MInOut",
            "value": 0.5
        },
        {
            "source": "MWikiToken",
            "target": "MWikiToken",
            "value": 1.5
        },
        {
            "source": "CommissionCalc",
            "target": "MCommission",
            "value": 2.0
        },
        {
            "source": "OFXBankStatementHandler",
            "target": "SAXException",
            "value": 2.5
        },
        {
            "source": "OrderPOCreate",
            "target": "OrderPOCreate",
            "value": 1.0
        },
        {
            "source": "MMediaDeploy",
            "target": "MMediaServer",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "X_A_Asset",
            "value": 1.0
        },
        {
            "source": "WebUser",
            "target": "X_C_BPartner",
            "value": 16.0
        },
        {
            "source": "CostUpdate",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MAttributeSet",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MPOS",
            "target": "MBPartner",
            "value": 2.0
        },
        {
            "source": "MCash",
            "target": "MCashLine",
            "value": 0.5
        },
        {
            "source": "MWFProcess",
            "target": "MWFNodeNext",
            "value": 0.5
        },
        {
            "source": "UITabVOFactory",
            "target": "UITabVOFT",
            "value": 2.0
        },
        {
            "source": "MReturnPolicy",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCostUpdate",
            "target": "MCostUpdateLine",
            "value": 0.5
        },
        {
            "source": "MRfQLineQty",
            "target": "MUOM",
            "value": 1.5
        },
        {
            "source": "MInvoice",
            "target": "X_C_BPartner",
            "value": 7.5
        },
        {
            "source": "MInventoryLineMA",
            "target": "X_M_InventoryLineMA",
            "value": 5.0
        },
        {
            "source": "CommissionCalc",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "BOMValidate",
            "target": "MProduct",
            "value": 3.5
        },
        {
            "source": "MBOMProduct",
            "target": "MBOM",
            "value": 4.0
        },
        {
            "source": "StorageCleanup",
            "target": "X_M_Locator",
            "value": 1.0
        },
        {
            "source": "MContactInterest",
            "target": "X_R_Request",
            "value": 2.0
        },
        {
            "source": "MResource",
            "target": "MResourceType",
            "value": 1.5
        },
        {
            "source": "MBankStatement",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MLead",
            "target": "MBPartnerLocation",
            "value": 0.5
        },
        {
            "source": "MLandedCost",
            "target": "MLandedCost",
            "value": 0.5
        },
        {
            "source": "DunningPrint",
            "target": "X_C_Invoice",
            "value": 0.5
        },
        {
            "source": "MReportColumn",
            "target": "MReportColumn",
            "value": 5.5
        },
        {
            "source": "MInventory",
            "target": "X_M_Inventory",
            "value": 34.0
        },
        {
            "source": "MPriceListVersion",
            "target": "MPriceListVersion",
            "value": 1.0
        },
        {
            "source": "MMenu",
            "target": "X_AD_Menu",
            "value": 2.0
        },
        {
            "source": "MTimeExpense",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "ImportInventory",
            "target": "MInventoryLine",
            "value": 0.5
        },
        {
            "source": "MRequestAction",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MPaySelection",
            "target": "X_C_PaySelection",
            "value": 5.5
        },
        {
            "source": "CalloutOrder",
            "target": "MBPartner",
            "value": 1.5
        },
        {
            "source": "MSchedulerLog",
            "target": "CompiereProcessorLog",
            "value": 2.0
        },
        {
            "source": "AllocationReset",
            "target": "X_C_AllocationHdr",
            "value": 1.0
        },
        {
            "source": "MMovementLine",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "MReportColumnSet",
            "target": "MReportColumn",
            "value": 1.0
        },
        {
            "source": "PP_Optimal",
            "target": "MPayment",
            "value": 1.0
        },
        {
            "source": "MCost",
            "target": "MConversionRate",
            "value": 0.5
        },
        {
            "source": "MAttributeSetInstance",
            "target": "MAttributeSetInstance",
            "value": 3.0
        },
        {
            "source": "ViewImportFromDB",
            "target": "MViewComponent",
            "value": 0.5
        },
        {
            "source": "MContactInterest",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "WebUser",
            "target": "MBPartner",
            "value": 4.5
        },
        {
            "source": "label",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MInventoryLine",
            "target": "X_M_InventoryLineMA",
            "value": 1.5
        },
        {
            "source": "ImportOrder",
            "target": "X_C_Location",
            "value": 2.0
        },
        {
            "source": "MRfQTopic",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "TimeUtil",
            "value": 1.5
        },
        {
            "source": "MPayment",
            "target": "MBPBankAccount",
            "value": 2.5
        },
        {
            "source": "MContactInterest",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "KeyNamePair",
            "target": "NamePair",
            "value": 2.0
        },
        {
            "source": "MLdapProcessorLog",
            "target": "X_AD_LdapProcessorLog",
            "value": 3.5
        },
        {
            "source": "MPeriod",
            "target": "MAcctSchema",
            "value": 1.5
        },
        {
            "source": "MGroup",
            "target": "X_R_Group",
            "value": 2.0
        },
        {
            "source": "TranslationImportExport",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "GridWindow",
            "target": "GridWindow",
            "value": 8.5
        },
        {
            "source": "MPaymentProcessor",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "CLogger",
            "value": 3.0
        },
        {
            "source": "PeriodControlStatus",
            "target": "X_C_PeriodControl",
            "value": 5.5
        },
        {
            "source": "ASyncWorker",
            "target": "ASyncProcess",
            "value": 1.5
        },
        {
            "source": "MReturnPolicy",
            "target": "MReturnPolicyLine",
            "value": 0.5
        },
        {
            "source": "RfQCreateSO",
            "target": "X_C_RfQ",
            "value": 4.5
        },
        {
            "source": "MBankStatementLine",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MStore",
            "target": "MWarehouse",
            "value": 0.5
        },
        {
            "source": "WebSessionCtx",
            "target": "X_W_Store",
            "value": 7.5
        },
        {
            "source": "ReplenishReport",
            "target": "ReplenishReport",
            "value": 2.5
        },
        {
            "source": "MProjectTypePhase",
            "target": "MProjectTypeTask",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "ASyncWorker",
            "target": "ASyncWorker",
            "value": 1.0
        },
        {
            "source": "MTaxDeclarationAcct",
            "target": "X_C_TaxDeclarationAcct",
            "value": 3.5
        },
        {
            "source": "MAsset",
            "target": "X_M_InOutLine",
            "value": 3.0
        },
        {
            "source": "ComponentProduct",
            "target": "MComponentReg",
            "value": 1.5
        },
        {
            "source": "SLAGoalProcess",
            "target": "SLACriteria",
            "value": 0.5
        },
        {
            "source": "GridWindow",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWFNode",
            "target": "CLogger",
            "value": 4.5
        },
        {
            "source": "RfQCreatePO",
            "target": "MOrderLine",
            "value": 3.5
        },
        {
            "source": "MMovementConfirm",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "MMailText",
            "value": 1.0
        },
        {
            "source": "MInventoryLineMA",
            "target": "MInventoryLineMA",
            "value": 0.5
        },
        {
            "source": "MReportLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MJournal",
            "target": "X_C_AcctSchema_GL",
            "value": 0.5
        },
        {
            "source": "MSchedule",
            "target": "MSchedule",
            "value": 7.5
        },
        {
            "source": "MProjectLine",
            "target": "X_C_ProjectTask",
            "value": 0.5
        },
        {
            "source": "MRoleOrgAccess",
            "target": "X_AD_Role_OrgAccess",
            "value": 2.0
        },
        {
            "source": "AllocationAuto",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MCharge",
            "target": "X_C_Charge",
            "value": 4.0
        },
        {
            "source": "MJournal",
            "target": "X_C_ElementValue",
            "value": 1.5
        },
        {
            "source": "MProductPO",
            "target": "MProductPO",
            "value": 0.5
        },
        {
            "source": "DocWorkflowManager",
            "target": "X_AD_Workflow",
            "value": 2.0
        },
        {
            "source": "MWFProcess",
            "target": "MWorkflow",
            "value": 1.5
        },
        {
            "source": "ReplenishReport",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "MBPartner",
            "target": "MBPGroup",
            "value": 2.5
        },
        {
            "source": "MMatchPO",
            "target": "X_M_MatchPO",
            "value": 51.5
        },
        {
            "source": "MPayment",
            "target": "Server",
            "value": 0.5
        },
        {
            "source": "M_Element",
            "target": "X_AD_Element",
            "value": 2.0
        },
        {
            "source": "BankStatementPayment",
            "target": "X_C_Payment",
            "value": 11.5
        },
        {
            "source": "MReportColumnSet",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MAd",
            "target": "X_CM_Ad",
            "value": 7.0
        },
        {
            "source": "MStorage",
            "target": "X_M_Warehouse",
            "value": 0.5
        },
        {
            "source": "MProjectLine",
            "target": "X_C_ProjectIssue",
            "value": 2.0
        },
        {
            "source": "RegisterSystem",
            "target": "X_AD_System",
            "value": 2.0
        },
        {
            "source": "StorageCleanup",
            "target": "MMovement",
            "value": 1.0
        },
        {
            "source": "MCashBook",
            "target": "MCashBook",
            "value": 1.0
        },
        {
            "source": "MWFNode",
            "target": "Env",
            "value": 1.0
        },
        {
            "source": "MWarehousePrice",
            "target": "X_M_Product",
            "value": 0.5
        },
        {
            "source": "MWikiToken",
            "target": "X_CM_Container",
            "value": 1.0
        },
        {
            "source": "MYear",
            "target": "MYear",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "X_C_BPartner_Location",
            "value": 1.5
        },
        {
            "source": "MProcess",
            "target": "X_AD_Process",
            "value": 2.0
        },
        {
            "source": "MLdapProcessor",
            "target": "DB",
            "value": 2.5
        },
        {
            "source": "MInvoice",
            "target": "X_C_Invoice",
            "value": 158.5
        },
        {
            "source": "MBankAccount",
            "target": "BankVerificationInterface",
            "value": 1.0
        },
        {
            "source": "MTask",
            "target": "Task",
            "value": 2.5
        },
        {
            "source": "GridField",
            "target": "DisplayType",
            "value": 0.5
        },
        {
            "source": "DunningPrint",
            "target": "X_C_DunningRunLine",
            "value": 1.0
        },
        {
            "source": "MJournal",
            "target": "X_GL_Journal",
            "value": 70.0
        },
        {
            "source": "MPaymentAllocate",
            "target": "X_C_PaymentAllocate",
            "value": 13.5
        },
        {
            "source": "MRfQ",
            "target": "MRfQResponse",
            "value": 0.5
        },
        {
            "source": "AssetDelivery",
            "target": "EMail",
            "value": 4.5
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "MInvoice",
            "value": 3.0
        },
        {
            "source": "MRecurringRun",
            "target": "X_C_Recurring_Run",
            "value": 3.0
        },
        {
            "source": "MPaySelection",
            "target": "MPaySelectionLine",
            "value": 0.5
        },
        {
            "source": "ImportPayment",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MDistribution",
            "target": "X_GL_DistributionLine",
            "value": 3.5
        },
        {
            "source": "MMailText",
            "target": "X_C_BPartner",
            "value": 1.0
        },
        {
            "source": "MFactAccumulation",
            "target": "X_Fact_Accumulation",
            "value": 12.5
        },
        {
            "source": "MPriceListVersion",
            "target": "X_M_PriceList_Version",
            "value": 6.5
        },
        {
            "source": "ReplenishReport",
            "target": "X_C_DocType",
            "value": 1.0
        },
        {
            "source": "PriceListCreate",
            "target": "PriceListCreate",
            "value": 2.0
        },
        {
            "source": "MOrderLine",
            "target": "MProduct",
            "value": 4.0
        },
        {
            "source": "Element",
            "target": "Node",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "MProject",
            "value": 0.5
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_Tax",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MAllocationHdr",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "MUser",
            "value": 0.5
        },
        {
            "source": "MStatusCategory",
            "target": "X_R_StatusCategory",
            "value": 4.5
        },
        {
            "source": "MTaxDeclaration",
            "target": "TimeUtil",
            "value": 1.0
        },
        {
            "source": "ImportAccount",
            "target": "MAcctSchema",
            "value": 2.5
        },
        {
            "source": "MInOutConfirm",
            "target": "MInventoryLine",
            "value": 0.5
        },
        {
            "source": "MRfQ",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MInvoice",
            "target": "X_C_DocType",
            "value": 6.0
        },
        {
            "source": "ReplicationLocal",
            "target": "MReplicationRun",
            "value": 2.0
        },
        {
            "source": "MCStageElement",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "ReplicationLocal",
            "target": "ProcessInfoLog",
            "value": 1.5
        },
        {
            "source": "MPaymentProcessor",
            "target": "X_C_PaymentProcessor",
            "value": 13.5
        },
        {
            "source": "InvoiceNGL",
            "target": "X_C_ValidCombination",
            "value": 1.0
        },
        {
            "source": "Tax",
            "target": "Msg",
            "value": 3.0
        },
        {
            "source": "MStorage",
            "target": "MWarehouse",
            "value": 2.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_OrgInfo",
            "value": 7.0
        },
        {
            "source": "MYear",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "AllocationReset",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MWFBlock",
            "target": "MWFBlock",
            "value": 0.5
        },
        {
            "source": "MRequestType",
            "target": "X_R_RequestType",
            "value": 13.5
        },
        {
            "source": "MBankAccount",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MLandedCost",
            "target": "MInvoiceLine",
            "value": 1.0
        },
        {
            "source": "CalloutOrder",
            "target": "DisplayType",
            "value": 1.0
        },
        {
            "source": "MOrderLine",
            "target": "MInOut",
            "value": 0.5
        },
        {
            "source": "CostUpdate",
            "target": "X_M_CostUpdate",
            "value": 1.0
        },
        {
            "source": "MBOM",
            "target": "X_M_BOM",
            "value": 6.5
        },
        {
            "source": "MCash",
            "target": "X_C_CashBook",
            "value": 1.0
        },
        {
            "source": "ProjectIssue",
            "target": "ProjectIssue",
            "value": 3.0
        },
        {
            "source": "MUserMail",
            "target": "X_AD_UserMail",
            "value": 10.0
        },
        {
            "source": "MLoginMsgLog",
            "target": "X_AD_LoginMsgLog",
            "value": 4.0
        },
        {
            "source": "CCachedRowSet",
            "target": "CachedRowSetImpl",
            "value": 2.0
        },
        {
            "source": "MWFNodePara",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCost",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "DeliveryAccuracy",
            "target": "MSLAMeasure",
            "value": 1.0
        },
        {
            "source": "MImpFormat",
            "target": "X_AD_ImpFormat",
            "value": 2.5
        },
        {
            "source": "MRecurring",
            "target": "Msg",
            "value": 2.5
        },
        {
            "source": "ReplicationLocal",
            "target": "Ctx",
            "value": 2.0
        },
        {
            "source": "MBPartner",
            "target": "MUser",
            "value": 0.5
        },
        {
            "source": "MContactInterest",
            "target": "MUser",
            "value": 1.0
        },
        {
            "source": "InvoiceNGL",
            "target": "X_AD_Org",
            "value": 0.5
        },
        {
            "source": "TranslationHandler",
            "target": "Attributes",
            "value": 2.5
        },
        {
            "source": "ImportBPartner",
            "target": "X_I_BPartner",
            "value": 53.5
        },
        {
            "source": "link",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MInOutLineMA",
            "target": "MInOutLineMA",
            "value": 0.5
        },
        {
            "source": "MBPartnerProduct",
            "target": "X_C_BPartner_Product",
            "value": 2.0
        },
        {
            "source": "MCashLine",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MAlert",
            "target": "MAlertRule",
            "value": 0.5
        },
        {
            "source": "ImportInOutConfirm",
            "target": "MInOutLineConfirm",
            "value": 0.5
        },
        {
            "source": "GridWindow",
            "target": "td",
            "value": 6.5
        },
        {
            "source": "MContactInterest",
            "target": "MRequest",
            "value": 0.5
        },
        {
            "source": "MigrateData",
            "target": "Ctx",
            "value": 1.5
        },
        {
            "source": "WebUser",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MUser",
            "target": "X_AD_User",
            "value": 2.0
        },
        {
            "source": "Env",
            "target": "EnvConstants",
            "value": 2.0
        },
        {
            "source": "MProjectIssue",
            "target": "X_M_Locator",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "MBPartner",
            "value": 8.0
        },
        {
            "source": "ResultTableCellRenderer",
            "target": "RColumn",
            "value": 1.5
        },
        {
            "source": "MReportLineSet",
            "target": "X_PA_ReportLineSet",
            "value": 3.0
        },
        {
            "source": "MYear",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MRequest",
            "target": "MBPartner",
            "value": 1.5
        },
        {
            "source": "MRfQResponse",
            "target": "X_C_RfQ_TopicSubscriber",
            "value": 1.5
        },
        {
            "source": "MDataMigration",
            "target": "MDataMigration",
            "value": 1.0
        },
        {
            "source": "MMediaServer",
            "target": "X_CM_MediaDeploy",
            "value": 1.5
        },
        {
            "source": "MPaymentValidate",
            "target": "MPaymentValidate",
            "value": 0.5
        },
        {
            "source": "VolumeTest",
            "target": "Ctx",
            "value": 2.0
        },
        {
            "source": "MMediaServer",
            "target": "SocketClient",
            "value": 1.0
        },
        {
            "source": "MInventory",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "ReplicationRemote",
            "target": "ProcessInfo",
            "value": 9.5
        },
        {
            "source": "RfQCreatePO",
            "target": "X_C_RfQResponseLine",
            "value": 1.5
        },
        {
            "source": "FinStatement",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MMatchPO",
            "target": "X_C_InvoiceLine",
            "value": 6.5
        },
        {
            "source": "BankStatementPayment",
            "target": "BankStatementPayment",
            "value": 1.0
        },
        {
            "source": "MMatchInv",
            "target": "X_M_InOutLine",
            "value": 1.0
        },
        {
            "source": "MInvoiceTax",
            "target": "MTax",
            "value": 2.5
        },
        {
            "source": "MRequisitionLine",
            "target": "ChangeVO",
            "value": 1.0
        },
        {
            "source": "MMedia",
            "target": "MMediaDeploy",
            "value": 1.0
        },
        {
            "source": "MInOutConfirm",
            "target": "MInventory",
            "value": 1.5
        },
        {
            "source": "MInOutLine",
            "target": "X_C_Order",
            "value": 0.5
        },
        {
            "source": "MInventoryLine",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "MPayment",
            "value": 93.0
        },
        {
            "source": "ProductCost",
            "target": "MAccount",
            "value": 1.0
        },
        {
            "source": "MScheduler",
            "target": "MUser",
            "value": 2.0
        },
        {
            "source": "WebDoc",
            "target": "img",
            "value": 1.5
        },
        {
            "source": "MUOMConversion",
            "target": "X_C_UOM",
            "value": 1.5
        },
        {
            "source": "img",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MProductBOM",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "ImportAccount",
            "target": "MElementValue",
            "value": 1.5
        },
        {
            "source": "MInOutLine",
            "target": "ResponseVO",
            "value": 1.0
        },
        {
            "source": "MRequestProcessor",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MInventoryLineMA",
            "target": "X_M_InventoryLine",
            "value": 0.5
        },
        {
            "source": "MProjectIssue",
            "target": "X_C_Project",
            "value": 0.5
        },
        {
            "source": "InvoiceNGL",
            "target": "X_GL_JournalBatch",
            "value": 2.5
        },
        {
            "source": "MMovementConfirm",
            "target": "MMovementLineConfirm",
            "value": 3.0
        },
        {
            "source": "FTP",
            "target": "TelnetClient",
            "value": 2.0
        },
        {
            "source": "MLookup",
            "target": "Lookup",
            "value": 2.0
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "X_C_InvoiceBatchLine",
            "value": 10.0
        },
        {
            "source": "MWFActivity",
            "target": "MConversionRate",
            "value": 0.5
        },
        {
            "source": "MCommissionRun",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MStore",
            "target": "DB",
            "value": 2.5
        },
        {
            "source": "MProduct",
            "target": "X_C_TaxCategory",
            "value": 0.5
        },
        {
            "source": "TranslationHandler",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "InvoiceBatchProcess",
            "target": "MInvoice",
            "value": 2.0
        },
        {
            "source": "MProjectLine",
            "target": "MProject",
            "value": 2.0
        },
        {
            "source": "MPayment",
            "target": "X_C_DocTypeCounter",
            "value": 3.0
        },
        {
            "source": "ImportOrder",
            "target": "X_M_Product",
            "value": 0.5
        },
        {
            "source": "MRfQResponseLine",
            "target": "MRfQResponseLineQty",
            "value": 1.0
        },
        {
            "source": "ExpenseSOrder",
            "target": "X_C_BPartner",
            "value": 1.0
        },
        {
            "source": "MUOM",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "MCommissionDetail",
            "target": "X_C_CommissionRun",
            "value": 0.5
        },
        {
            "source": "MChat",
            "target": "X_CM_Chat",
            "value": 6.5
        },
        {
            "source": "MPaymentTerm",
            "target": "MPaymentTerm",
            "value": 4.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_Org",
            "value": 0.5
        },
        {
            "source": "GwtTest",
            "target": "GwtTest",
            "value": 1.0
        },
        {
            "source": "MProductLocator",
            "target": "MLocator",
            "value": 0.5
        },
        {
            "source": "MContainer",
            "target": "MContainer",
            "value": 6.0
        },
        {
            "source": "MTaxDeclarationLine",
            "target": "X_C_InvoiceLine",
            "value": 3.0
        },
        {
            "source": "MAttribute",
            "target": "MAttributeInstance",
            "value": 3.0
        },
        {
            "source": "MCost",
            "target": "X_M_Cost",
            "value": 27.0
        },
        {
            "source": "MPayment",
            "target": "X_C_DocType",
            "value": 4.5
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_LandedCost",
            "value": 13.0
        },
        {
            "source": "PP_Optimal",
            "target": "PaymentProcessor",
            "value": 12.5
        },
        {
            "source": "Tax",
            "target": "DB",
            "value": 2.5
        },
        {
            "source": "MWorkflowProcessor",
            "target": "CompiereProcessor",
            "value": 2.0
        },
        {
            "source": "MRegistrationValue",
            "target": "MRegistrationValue",
            "value": 2.0
        },
        {
            "source": "MStore",
            "target": "MMailMsg",
            "value": 1.0
        },
        {
            "source": "MJournalBatch",
            "target": "X_C_Period",
            "value": 1.0
        },
        {
            "source": "MCash",
            "target": "MAllocationLine",
            "value": 0.5
        },
        {
            "source": "MAttributeUse",
            "target": "MAttributeUse",
            "value": 0.5
        },
        {
            "source": "a",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "ImportInventory",
            "target": "MInventory",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "DB",
            "value": 4.5
        },
        {
            "source": "MTimeExpenseLine",
            "target": "MTimeExpense",
            "value": 1.5
        },
        {
            "source": "ImportBankStatement",
            "target": "DB",
            "value": 11.0
        },
        {
            "source": "MTaxDeclarationLine",
            "target": "X_C_TaxDeclaration",
            "value": 1.0
        },
        {
            "source": "MPaymentTerm",
            "target": "MPaySchedule",
            "value": 1.0
        },
        {
            "source": "PP_PayFlowPro",
            "target": "X_C_Payment",
            "value": 11.5
        },
        {
            "source": "MDocAction",
            "target": "X_C_DocBaseType",
            "value": 0.5
        },
        {
            "source": "EntityTypeRegister",
            "target": "HttpMethodBase",
            "value": 2.0
        },
        {
            "source": "MDistribution",
            "target": "MDistribution",
            "value": 2.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "MWarehouse",
            "value": 0.5
        },
        {
            "source": "MAttributeSetInstance",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MSerNoCtl",
            "target": "X_M_SerNoCtl",
            "value": 6.5
        },
        {
            "source": "MInfoWindow",
            "target": "X_AD_InfoColumn",
            "value": 0.5
        },
        {
            "source": "MAttribute",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "DistributionRun",
            "target": "MOrder",
            "value": 5.0
        },
        {
            "source": "MInventoryLine",
            "target": "X_M_InventoryLine",
            "value": 23.0
        },
        {
            "source": "MFactAccumulation",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "MPaymentTerm",
            "target": "X_C_Invoice",
            "value": 4.0
        },
        {
            "source": "MResolution",
            "target": "X_R_Resolution",
            "value": 2.0
        },
        {
            "source": "WebInfo",
            "target": "WebInfo",
            "value": 37.5
        },
        {
            "source": "ReplicationLocal",
            "target": "X_AD_Replication_Run",
            "value": 1.5
        },
        {
            "source": "MLandedCostAllocation",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MCStage",
            "target": "X_CM_Template",
            "value": 0.5
        },
        {
            "source": "GridWorkbench",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "MOrgInfo",
            "value": 0.5
        },
        {
            "source": "MProductCategory",
            "target": "X_M_Product_Category",
            "value": 4.5
        },
        {
            "source": "MClientInfo",
            "target": "X_AD_ClientInfo",
            "value": 2.0
        },
        {
            "source": "MProduct",
            "target": "MProductDownload",
            "value": 0.5
        },
        {
            "source": "MCommissionLine",
            "target": "X_C_CommissionLine",
            "value": 5.5
        },
        {
            "source": "HttpConnectionParams",
            "target": "DefaultHttpParams",
            "value": 2.0
        },
        {
            "source": "MRfQResponse",
            "target": "X_C_RfQResponse",
            "value": 22.5
        },
        {
            "source": "MSchedulerPara",
            "target": "X_AD_Scheduler_Para",
            "value": 3.5
        },
        {
            "source": "MCommissionAmt",
            "target": "MCommissionRun",
            "value": 1.5
        },
        {
            "source": "InOutGenerate",
            "target": "X_M_InOut",
            "value": 4.5
        },
        {
            "source": "MScheduler",
            "target": "MNote",
            "value": 3.0
        },
        {
            "source": "MInOut",
            "target": "X_M_InOutLine",
            "value": 36.0
        },
        {
            "source": "MProduct",
            "target": "X_M_AttributeSet",
            "value": 0.5
        },
        {
            "source": "MSystem",
            "target": "X_AD_System",
            "value": 2.0
        },
        {
            "source": "MAd",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMovement",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MReportLine",
            "target": "MReportLine",
            "value": 2.5
        },
        {
            "source": "ProductCost",
            "target": "ProductCost",
            "value": 0.5
        },
        {
            "source": "MWFNode",
            "target": "X_AD_Workflow",
            "value": 0.5
        },
        {
            "source": "MBPartnerProduct",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "StateEngine",
            "value": 6.5
        },
        {
            "source": "MBPBankAccount",
            "target": "MBank",
            "value": 1.5
        },
        {
            "source": "ImpFormat",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "body",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MPaymentValidate",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MSchedulerRecipient",
            "target": "X_AD_SchedulerRecipient",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "X_C_InvoiceLine",
            "value": 1.0
        },
        {
            "source": "MResourceUnAvailable",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "DunningPrint",
            "target": "Query",
            "value": 1.0
        },
        {
            "source": "MProductCategoryAcct",
            "target": "X_M_Product_Category_Acct",
            "value": 5.5
        },
        {
            "source": "MProductPrice",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MLead",
            "target": "MUser",
            "value": 3.5
        },
        {
            "source": "MTimeExpense",
            "target": "X_S_TimeExpenseLine",
            "value": 1.5
        },
        {
            "source": "MTemplate",
            "target": "MTemplate",
            "value": 5.0
        },
        {
            "source": "CommissionCalc",
            "target": "MCommissionRun",
            "value": 0.5
        },
        {
            "source": "MTimeExpenseLine",
            "target": "MTimeExpenseLine",
            "value": 3.5
        },
        {
            "source": "MRfQLineQty",
            "target": "MRfQResponseLineQty",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "MOrder",
            "value": 1.5
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "MInvoicePaySchedule",
            "value": 1.5
        },
        {
            "source": "MContactInterest",
            "target": "MLead",
            "value": 1.5
        },
        {
            "source": "MAsset",
            "target": "X_M_Product",
            "value": 4.0
        },
        {
            "source": "MCommissionDetail",
            "target": "MCommissionDetail",
            "value": 1.0
        },
        {
            "source": "MInOutConfirm",
            "target": "MInOutLineConfirm",
            "value": 4.0
        },
        {
            "source": "MLead",
            "target": "X_C_BPartner",
            "value": 7.5
        },
        {
            "source": "MSLAMeasure",
            "target": "X_PA_SLA_Goal",
            "value": 0.5
        },
        {
            "source": "MWikiToken",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MContainerElement",
            "target": "MIndex",
            "value": 1.0
        },
        {
            "source": "MAsset",
            "target": "MBPartner",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MInventory",
            "target": "X_C_DocType",
            "value": 1.5
        },
        {
            "source": "MDocAction",
            "target": "Util",
            "value": 2.0
        },
        {
            "source": "RModel",
            "target": "RModelData",
            "value": 3.5
        },
        {
            "source": "MAssetGroup",
            "target": "MAssetGroup",
            "value": 1.0
        },
        {
            "source": "MAttribute",
            "target": "X_M_AttributeInstance",
            "value": 2.5
        },
        {
            "source": "MReturnPolicy",
            "target": "X_M_Product",
            "value": 0.5
        },
        {
            "source": "WebInfo",
            "target": "MTimeExpense",
            "value": 1.5
        },
        {
            "source": "LoadBankStatement",
            "target": "Ctx",
            "value": 2.0
        },
        {
            "source": "MContainer",
            "target": "X_CM_WebProject",
            "value": 3.5
        },
        {
            "source": "MProductLocator",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MDiscountSchema",
            "target": "MDiscountSchemaLine",
            "value": 0.5
        },
        {
            "source": "h1",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MContainer",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MReportColumn",
            "target": "X_PA_ReportColumn",
            "value": 20.0
        },
        {
            "source": "DistributionCreate",
            "target": "MDistributionList",
            "value": 1.5
        },
        {
            "source": "ImportBankStatement",
            "target": "X_I_BankStatement",
            "value": 25.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "MRequisition",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "Msg",
            "value": 1.0
        },
        {
            "source": "MAlertProcessor",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MRfQLine",
            "target": "MRfQLine",
            "value": 1.0
        },
        {
            "source": "MChat",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "CalloutOrder",
            "target": "X_C_OrderLine",
            "value": 4.0
        },
        {
            "source": "MDocTypeCounter",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MRequest",
            "target": "MChangeRequest",
            "value": 0.5
        },
        {
            "source": "MPOSKeyLayout",
            "target": "X_C_POSKeyLayout",
            "value": 2.5
        },
        {
            "source": "MPaySelectionLine",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "CostUpdate",
            "target": "CostUpdate",
            "value": 4.5
        },
        {
            "source": "MInvoiceTax",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWFResponsible",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MCash",
            "target": "MAllocationHdr",
            "value": 2.0
        },
        {
            "source": "MAcctSchema",
            "target": "X_C_AcctSchema",
            "value": 2.0
        },
        {
            "source": "MInventoryLine",
            "target": "MInventoryLine",
            "value": 7.5
        },
        {
            "source": "WebUser",
            "target": "MBPartnerLocation",
            "value": 3.0
        },
        {
            "source": "MCost",
            "target": "MCostElement",
            "value": 1.0
        },
        {
            "source": "MPeriod",
            "target": "MCalendar",
            "value": 0.5
        },
        {
            "source": "DistributionRun",
            "target": "DistributionRun",
            "value": 3.5
        },
        {
            "source": "MBankStatementLine",
            "target": "MPayment",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "X_C_BPartner",
            "value": 0.5
        },
        {
            "source": "MRfQTopicSubscriber",
            "target": "X_C_RfQ_TopicSubscriber",
            "value": 2.5
        },
        {
            "source": "MPayment",
            "target": "Msg",
            "value": 5.0
        },
        {
            "source": "FastByteArrayOutputStream",
            "target": "FastByteArrayOutputStream",
            "value": 1.5
        },
        {
            "source": "MDiscountSchema",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_C_OrderLine",
            "value": 38.0
        },
        {
            "source": "MOrder",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "MProductBOM",
            "target": "MProductBOM",
            "value": 1.0
        },
        {
            "source": "MDataMigrationEntry",
            "target": "X_AD_DataMigration",
            "value": 0.5
        },
        {
            "source": "MJournal",
            "target": "MLocation",
            "value": 1.0
        },
        {
            "source": "MDunningRun",
            "target": "X_C_DunningRunEntry",
            "value": 2.0
        },
        {
            "source": "WebProjectDeploy",
            "target": "CompiereUserException",
            "value": 0.5
        },
        {
            "source": "MTransaction",
            "target": "X_M_Transaction",
            "value": 8.5
        },
        {
            "source": "MCash",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "MContactInterest",
            "target": "X_AD_User",
            "value": 1.0
        },
        {
            "source": "MAcctProcessor",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MMediaServer",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MJournal",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "VolumeTest",
            "target": "MOrder",
            "value": 2.0
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "TranslationImportExport",
            "target": "CompiereUserException",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "ChangeVO",
            "value": 0.5
        },
        {
            "source": "MAdvertisement",
            "target": "MClickCount",
            "value": 2.5
        },
        {
            "source": "CalloutPayment",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWFBlock",
            "target": "X_AD_WF_Block",
            "value": 2.0
        },
        {
            "source": "ExpenseSOrder",
            "target": "X_S_TimeExpense",
            "value": 2.0
        },
        {
            "source": "MInventoryLine",
            "target": "MInventory",
            "value": 1.5
        },
        {
            "source": "MAttribute",
            "target": "MAttributeValue",
            "value": 0.5
        },
        {
            "source": "MAttribute",
            "target": "X_M_AttributeValue",
            "value": 2.0
        },
        {
            "source": "MRecurring",
            "target": "X_GL_JournalBatch",
            "value": 1.0
        },
        {
            "source": "MNewsChannel",
            "target": "X_CM_NewsChannel",
            "value": 6.0
        },
        {
            "source": "VolumeTest",
            "target": "X_C_Order",
            "value": 2.0
        },
        {
            "source": "MAllocationLine",
            "target": "X_C_AllocationLine",
            "value": 21.0
        },
        {
            "source": "MInvoice",
            "target": "MInvoiceTax",
            "value": 2.0
        },
        {
            "source": "DistributionRun",
            "target": "MDocType",
            "value": 1.5
        },
        {
            "source": "MRequestProcessorLog",
            "target": "X_R_RequestProcessorLog",
            "value": 3.5
        },
        {
            "source": "MInOutLine",
            "target": "Ctx",
            "value": 3.0
        },
        {
            "source": "MRegistration",
            "target": "MRegistrationValue",
            "value": 1.5
        },
        {
            "source": "MPaymentAllocate",
            "target": "X_C_Payment",
            "value": 3.5
        },
        {
            "source": "th",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "EntityTypeRegister",
            "target": "CompiereSystemException",
            "value": 1.0
        },
        {
            "source": "VolumeTest",
            "target": "Ini",
            "value": 3.5
        },
        {
            "source": "MAsset",
            "target": "MProduct",
            "value": 4.0
        },
        {
            "source": "MContainerElement",
            "target": "X_CM_Container_Element",
            "value": 5.5
        },
        {
            "source": "MPriceListVersion",
            "target": "X_M_PriceList",
            "value": 0.5
        },
        {
            "source": "MCashLine",
            "target": "X_C_Invoice",
            "value": 2.0
        },
        {
            "source": "WebSessionCtx",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MMedia",
            "target": "MImage",
            "value": 0.5
        },
        {
            "source": "DunningPrint",
            "target": "EMail",
            "value": 2.5
        },
        {
            "source": "InvoiceNGL",
            "target": "X_GL_Journal",
            "value": 2.5
        },
        {
            "source": "MWFActivity",
            "target": "MWFProcess",
            "value": 3.0
        },
        {
            "source": "RModelData",
            "target": "RColumn",
            "value": 5.0
        },
        {
            "source": "WebDoc",
            "target": "body",
            "value": 3.5
        },
        {
            "source": "MTaxDeclarationLine",
            "target": "X_C_InvoiceTax",
            "value": 1.5
        },
        {
            "source": "ImportInvoice",
            "target": "X_C_BPartner_Location",
            "value": 2.5
        },
        {
            "source": "MWorkflow",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "WebInfo",
            "target": "MNote",
            "value": 1.0
        },
        {
            "source": "MIndex",
            "target": "Trx",
            "value": 1.0
        },
        {
            "source": "MCommissionDetail",
            "target": "X_C_CommissionAmt",
            "value": 1.0
        },
        {
            "source": "MTimeExpenseLine",
            "target": "X_S_ResourceAssignment",
            "value": 1.5
        },
        {
            "source": "ImportOrder",
            "target": "X_C_Order",
            "value": 10.0
        },
        {
            "source": "MRequest",
            "target": "Util",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "X_AD_User",
            "value": 1.0
        },
        {
            "source": "MRegistrationAttribute",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MProductCosting",
            "target": "MProductCosting",
            "value": 1.0
        },
        {
            "source": "PaymentProcessor",
            "target": "MPayment",
            "value": 1.0
        },
        {
            "source": "MMovement",
            "target": "X_M_Transaction",
            "value": 2.0
        },
        {
            "source": "MCash",
            "target": "X_C_Payment",
            "value": 4.5
        },
        {
            "source": "MChat",
            "target": "DisplayType",
            "value": 0.5
        },
        {
            "source": "MAllocationHdr",
            "target": "X_C_Payment",
            "value": 1.0
        },
        {
            "source": "MDistributionLine",
            "target": "MDistributionLine",
            "value": 0.5
        },
        {
            "source": "MStatusCategory",
            "target": "X_R_Status",
            "value": 1.5
        },
        {
            "source": "MAchievement",
            "target": "X_PA_Achievement",
            "value": 5.0
        },
        {
            "source": "MCommissionDetail",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "Task",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MWarehousePrice",
            "target": "MPriceList",
            "value": 1.0
        },
        {
            "source": "MPaySelectionCheck",
            "target": "MBPBankAccount",
            "value": 1.0
        },
        {
            "source": "MFactAccumulation",
            "target": "TimeUtil",
            "value": 4.0
        },
        {
            "source": "RequisitionPOCreate",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "MOrg",
            "value": 1.0
        },
        {
            "source": "MWFActivity",
            "target": "DocAction",
            "value": 16.5
        },
        {
            "source": "MReport",
            "target": "X_PA_Report",
            "value": 7.5
        },
        {
            "source": "MTimeExpense",
            "target": "MTimeExpense",
            "value": 3.5
        },
        {
            "source": "MJournal",
            "target": "X_C_Project",
            "value": 1.0
        },
        {
            "source": "MOrg",
            "target": "X_AD_Org",
            "value": 2.0
        },
        {
            "source": "OFXBankStatementHandler",
            "target": "OFXBankStatementHandler",
            "value": 2.0
        },
        {
            "source": "MCalendar",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "MInventoryLineMA",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MLdapAccess",
            "target": "X_AD_LdapAccess",
            "value": 2.0
        },
        {
            "source": "ReplicationLocal",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "PP_Optimal",
            "target": "X_C_PaymentProcessor",
            "value": 5.5
        },
        {
            "source": "MSLAGoal",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "MProduct",
            "value": 0.5
        },
        {
            "source": "MLot",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MInvoiceLine",
            "target": "X_R_Source",
            "value": 3.0
        },
        {
            "source": "MPaymentAllocate",
            "target": "MPayment",
            "value": 1.0
        },
        {
            "source": "MBPBankAccount",
            "target": "MBPBankAccount",
            "value": 2.0
        },
        {
            "source": "MRequestProcessor",
            "target": "X_AD_Client",
            "value": 0.5
        },
        {
            "source": "MAsset",
            "target": "MAssetDelivery",
            "value": 1.5
        },
        {
            "source": "MDistribution",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "X_M_Warehouse",
            "value": 1.0
        },
        {
            "source": "ViewImportFromDB",
            "target": "MViewColumn",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "X_M_InOutLine",
            "value": 53.0
        },
        {
            "source": "MJournalLine",
            "target": "MElementValue",
            "value": 1.5
        },
        {
            "source": "MCStage",
            "target": "X_CM_CStage_Element",
            "value": 1.5
        },
        {
            "source": "MDunningRun",
            "target": "X_C_DunningRun",
            "value": 4.0
        },
        {
            "source": "MUOM",
            "target": "MUOM",
            "value": 2.0
        },
        {
            "source": "CalloutOrder",
            "target": "X_M_InOutLine",
            "value": 1.5
        },
        {
            "source": "MMovementLineConfirm",
            "target": "X_M_MovementLine",
            "value": 2.5
        },
        {
            "source": "ProjectGenOrder",
            "target": "X_C_Order",
            "value": 0.5
        },
        {
            "source": "MPackageLine",
            "target": "X_M_Package",
            "value": 0.5
        },
        {
            "source": "label",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "ProjectPhaseGenOrder",
            "target": "MOrderLine",
            "value": 5.5
        },
        {
            "source": "MReturnPolicy",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MInvoiceLine",
            "target": "X_M_InOutLine",
            "value": 14.0
        },
        {
            "source": "InvoiceNGL",
            "target": "X_T_InvoiceGL",
            "value": 2.5
        },
        {
            "source": "MComponentUse",
            "target": "X_AD_ComponentUse",
            "value": 2.5
        },
        {
            "source": "BPartnerOrgLink",
            "target": "MLocator",
            "value": 0.5
        },
        {
            "source": "MMediaServer",
            "target": "FTPClient",
            "value": 6.0
        },
        {
            "source": "DistributionRun",
            "target": "X_C_Order",
            "value": 5.5
        },
        {
            "source": "MComponentReg",
            "target": "X_AD_ComponentReg",
            "value": 7.0
        },
        {
            "source": "RfQCreatePO",
            "target": "X_C_RfQ",
            "value": 2.0
        },
        {
            "source": "MRequisition",
            "target": "X_M_Requisition",
            "value": 22.0
        },
        {
            "source": "td",
            "target": "KeyEvents",
            "value": 2.0
        },
        {
            "source": "MDunningRunEntry",
            "target": "X_C_DunningRunLine",
            "value": 0.5
        },
        {
            "source": "RfQCreateSO",
            "target": "MOrderLine",
            "value": 2.0
        },
        {
            "source": "MRecurring",
            "target": "X_C_Project",
            "value": 1.0
        },
        {
            "source": "MPOS",
            "target": "X_C_POS",
            "value": 3.5
        },
        {
            "source": "BankStatementMatcher",
            "target": "X_I_BankStatement",
            "value": 2.5
        },
        {
            "source": "MInvoice",
            "target": "X_M_Product",
            "value": 2.5
        },
        {
            "source": "CommissionCalc",
            "target": "X_C_Commission",
            "value": 5.5
        },
        {
            "source": "MCalendar",
            "target": "X_C_Calendar",
            "value": 3.0
        },
        {
            "source": "MCost",
            "target": "X_AD_Org",
            "value": 1.0
        },
        {
            "source": "MBOMProduct",
            "target": "MBOMProduct",
            "value": 3.0
        },
        {
            "source": "MPaymentAllocate",
            "target": "X_C_Invoice",
            "value": 1.0
        },
        {
            "source": "DunningPrint",
            "target": "MUser",
            "value": 0.5
        },
        {
            "source": "MMovement",
            "target": "MPeriod",
            "value": 1.0
        },
        {
            "source": "MScheduler",
            "target": "MProcess",
            "value": 3.5
        },
        {
            "source": "ImpFormatRow",
            "target": "ImpFormatRow",
            "value": 6.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "X_C_BPartner",
            "value": 0.5
        },
        {
            "source": "MPriceList",
            "target": "X_M_PriceList",
            "value": 6.5
        },
        {
            "source": "MInOut",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "TreeMaintenance",
            "target": "MTreeNodeBP",
            "value": 0.5
        },
        {
            "source": "MDunningRunEntry",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MMedia",
            "target": "MMedia",
            "value": 3.0
        },
        {
            "source": "MActivity",
            "target": "X_C_Activity",
            "value": 2.5
        },
        {
            "source": "ImportGLJournal",
            "target": "X_GL_Journal",
            "value": 7.5
        },
        {
            "source": "MDistributionRunLine",
            "target": "X_M_DistributionRunLine",
            "value": 5.0
        },
        {
            "source": "MCharge",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "ExpenseAPInvoice",
            "target": "X_S_TimeExpense",
            "value": 3.0
        },
        {
            "source": "MBPartnerLocation",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MChangeNotice",
            "target": "X_M_ChangeNotice",
            "value": 3.0
        },
        {
            "source": "WebProjectDeploy",
            "target": "MCStage",
            "value": 0.5
        },
        {
            "source": "ProductCost",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "h2",
            "target": "MouseEvents",
            "value": 2.0
        },
        {
            "source": "MClick",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "X_C_BPartner",
            "value": 1.5
        },
        {
            "source": "MLdapProcessor",
            "target": "Msg",
            "value": 1.5
        },
        {
            "source": "AllocationAuto",
            "target": "X_C_Invoice",
            "value": 12.0
        },
        {
            "source": "ImportInventory",
            "target": "X_M_Inventory",
            "value": 1.5
        },
        {
            "source": "MOrder",
            "target": "ResponseVO",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "DocAction",
            "value": 2.0
        },
        {
            "source": "WebProjectDeploy",
            "target": "MTree",
            "value": 0.5
        },
        {
            "source": "MMailText",
            "target": "MUser",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "X_C_Order",
            "value": 21.0
        },
        {
            "source": "MBOMProduct",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MCalendar",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MSource",
            "target": "X_R_Source",
            "value": 2.0
        },
        {
            "source": "MContainer",
            "target": "X_CM_Container_Element",
            "value": 4.5
        },
        {
            "source": "InOutGenerate",
            "target": "CompiereUserException",
            "value": 0.5
        },
        {
            "source": "MWarehousePrice",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "VolumeTest",
            "target": "MPriceListVersion",
            "value": 1.0
        },
        {
            "source": "MProjectIssue",
            "target": "MTransaction",
            "value": 0.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MTax",
            "value": 1.5
        },
        {
            "source": "MInvoiceLine",
            "target": "X_C_OrderLine",
            "value": 13.5
        },
        {
            "source": "MTreeNodeCMS",
            "target": "X_AD_TreeNodeCMS",
            "value": 2.0
        },
        {
            "source": "MUOM",
            "target": "X_C_UOM",
            "value": 10.5
        },
        {
            "source": "ImportRequest",
            "target": "NamePair",
            "value": 0.5
        },
        {
            "source": "MComponentRegUpdate",
            "target": "X_AD_ComponentReg",
            "value": 6.0
        },
        {
            "source": "MScheduler",
            "target": "MAttachment",
            "value": 3.0
        },
        {
            "source": "BankStatementMatcher",
            "target": "MBankStatementMatcher",
            "value": 2.5
        },
        {
            "source": "MJournalLine",
            "target": "MAcctSchema",
            "value": 1.0
        },
        {
            "source": "MRequest",
            "target": "MRequestType",
            "value": 2.0
        },
        {
            "source": "MRecurring",
            "target": "MInvoice",
            "value": 0.5
        },
        {
            "source": "MInOutConfirm",
            "target": "X_M_InventoryLine",
            "value": 0.5
        },
        {
            "source": "MCStage",
            "target": "X_CM_CStage",
            "value": 10.0
        },
        {
            "source": "MMediaServer",
            "target": "MMediaServer",
            "value": 0.5
        },
        {
            "source": "MRequestProcessor",
            "target": "MRequestProcessorRoute",
            "value": 0.5
        },
        {
            "source": "MInvoiceSchedule",
            "target": "MInvoiceSchedule",
            "value": 1.5
        },
        {
            "source": "MAsset",
            "target": "X_A_Asset",
            "value": 29.5
        },
        {
            "source": "MInvoice",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "GridField",
            "target": "MAccountLookup",
            "value": 0.5
        },
        {
            "source": "MRequestType",
            "target": "Query",
            "value": 2.0
        },
        {
            "source": "MStatusCategory",
            "target": "MStatus",
            "value": 0.5
        },
        {
            "source": "MProductCategoryAcct",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPaymentTerm",
            "target": "X_C_PaymentTerm",
            "value": 13.0
        },
        {
            "source": "MAsset",
            "target": "MAssetGroup",
            "value": 1.0
        },
        {
            "source": "MPaySelectionLine",
            "target": "Ctx",
            "value": 1.0
        },
        {
            "source": "AllocationReset",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "MInOutLine",
            "target": "CLogger",
            "value": 2.5
        },
        {
            "source": "CopyImportFormat",
            "target": "MImpFormat",
            "value": 1.0
        },
        {
            "source": "MTableIndex",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "DistributionRun",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MResource",
            "target": "X_S_Resource",
            "value": 5.0
        },
        {
            "source": "MBPartnerInfo",
            "target": "MBPartnerInfo",
            "value": 0.5
        },
        {
            "source": "MChatType",
            "target": "X_CM_ChatType",
            "value": 2.5
        },
        {
            "source": "MChangeRequest",
            "target": "X_M_ChangeRequest",
            "value": 8.0
        },
        {
            "source": "MSource",
            "target": "MSource",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "ChangeVO",
            "value": 1.5
        },
        {
            "source": "ProjectGenOrder",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "ReplenishReport",
            "target": "MWarehouse",
            "value": 2.5
        },
        {
            "source": "MOrder",
            "target": "MCurrency",
            "value": 1.0
        },
        {
            "source": "DunningPrint",
            "target": "X_C_DunningLevel",
            "value": 4.5
        },
        {
            "source": "MJournalLine",
            "target": "MJournalLine",
            "value": 12.5
        },
        {
            "source": "WebInfo",
            "target": "MRequest",
            "value": 1.0
        },
        {
            "source": "MJournalLine",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMovementLineMA",
            "target": "MMovementLineMA",
            "value": 0.5
        },
        {
            "source": "MDiscountSchema",
            "target": "MDiscountSchemaBreak",
            "value": 1.5
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_Attachment",
            "value": 0.5
        },
        {
            "source": "MLdapProcessor",
            "target": "X_A_Asset",
            "value": 2.0
        },
        {
            "source": "RfQCopyLines",
            "target": "X_C_RfQLine",
            "value": 6.0
        },
        {
            "source": "GwtTest",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "ViewCreate",
            "target": "X_AD_Table",
            "value": 2.5
        },
        {
            "source": "MAlertProcessor",
            "target": "MAlertProcessor",
            "value": 0.5
        },
        {
            "source": "ImportInventory",
            "target": "DB",
            "value": 8.5
        },
        {
            "source": "MLoginMsg",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "EntityTypeRegister",
            "target": "PostMethod",
            "value": 0.5
        },
        {
            "source": "ImportLocator",
            "target": "NamePair",
            "value": 0.5
        },
        {
            "source": "MAllocationLine",
            "target": "MAllocationHdr",
            "value": 1.5
        },
        {
            "source": "MDocActionRule",
            "target": "X_C_DocBaseType",
            "value": 0.5
        },
        {
            "source": "MRequestAction",
            "target": "X_AD_User",
            "value": 0.5
        },
        {
            "source": "BankStatementMatcher",
            "target": "BankStatementMatchInfo",
            "value": 7.0
        },
        {
            "source": "PaySelectionCreateCheck",
            "target": "X_C_Invoice",
            "value": 0.5
        },
        {
            "source": "ConcreteElement",
            "target": "ElementAttributes",
            "value": 2.0
        },
        {
            "source": "ComponentProduct",
            "target": "X_C_BPartner",
            "value": 2.0
        },
        {
            "source": "MProject",
            "target": "X_C_ProjectType",
            "value": 1.0
        },
        {
            "source": "InvoiceNGL",
            "target": "MAccount",
            "value": 0.5
        },
        {
            "source": "MContainerElement",
            "target": "MContainer",
            "value": 1.5
        },
        {
            "source": "MInOutLineConfirm",
            "target": "X_M_InOutLine",
            "value": 5.0
        },
        {
            "source": "TranslationImportExport",
            "target": "Ini",
            "value": 0.5
        },
        {
            "source": "MUserPreference",
            "target": "X_AD_UserPreference",
            "value": 2.0
        },
        {
            "source": "MCommissionAmt",
            "target": "MCommissionLine",
            "value": 0.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MLead",
            "value": 2.0
        },
        {
            "source": "MInterestArea",
            "target": "X_R_ContactInterest",
            "value": 1.0
        },
        {
            "source": "WebSessionCtx",
            "target": "X_AD_Client",
            "value": 1.0
        },
        {
            "source": "TreeMaintenance",
            "target": "TreeMaintenance",
            "value": 0.5
        },
        {
            "source": "MInventory",
            "target": "X_M_InventoryLineMA",
            "value": 3.0
        },
        {
            "source": "AllocationAuto",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "MTimeExpense",
            "target": "MTimeExpenseLine",
            "value": 1.5
        },
        {
            "source": "MLead",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "MAlertProcessor",
            "target": "CompiereProcessor",
            "value": 2.0
        },
        {
            "source": "th",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MOrder",
            "target": "MInvoice",
            "value": 2.5
        },
        {
            "source": "MCash",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "MLdapProcessor",
            "target": "MLdapProcessorLog",
            "value": 0.5
        },
        {
            "source": "MPrivateAccess",
            "target": "X_AD_Private_Access",
            "value": 2.0
        },
        {
            "source": "MLanguage",
            "target": "X_AD_Language",
            "value": 2.0
        },
        {
            "source": "MWorkflow",
            "target": "X_AD_Menu",
            "value": 1.0
        },
        {
            "source": "MWFNextCondition",
            "target": "X_AD_WF_NextCondition",
            "value": 4.5
        },
        {
            "source": "MCommissionAmt",
            "target": "CLogger",
            "value": 0.5
        },
        {
            "source": "MCStage",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "RfQCreatePO",
            "target": "X_C_RfQLine",
            "value": 1.0
        },
        {
            "source": "MProjectIssue",
            "target": "MProject",
            "value": 1.5
        },
        {
            "source": "MViewColumn",
            "target": "X_AD_ViewColumn",
            "value": 2.0
        },
        {
            "source": "ViewImportFromDB",
            "target": "DB",
            "value": 3.5
        },
        {
            "source": "MProjectIssue",
            "target": "MProjectIssue",
            "value": 0.5
        },
        {
            "source": "WebUser",
            "target": "MBPBankAccount",
            "value": 0.5
        },
        {
            "source": "MBPRelation",
            "target": "MBPRelation",
            "value": 1.0
        },
        {
            "source": "MInventory",
            "target": "MInventoryLine",
            "value": 10.5
        },
        {
            "source": "MDistributionRunDetail",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "MConversionRate",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "DocumentEngine",
            "value": 1.0
        },
        {
            "source": "MInOutLineConfirm",
            "target": "CLogger",
            "value": 2.5
        },
        {
            "source": "WebSessionCtx",
            "target": "WebSessionCtx",
            "value": 5.0
        },
        {
            "source": "MBankStatement",
            "target": "MBankAccount",
            "value": 1.0
        },
        {
            "source": "MLdapProcessor",
            "target": "X_R_InterestArea",
            "value": 0.5
        },
        {
            "source": "MReturnPolicyLine",
            "target": "X_M_ReturnPolicyLine",
            "value": 2.0
        },
        {
            "source": "CalloutOrder",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MUOMConversion",
            "target": "X_C_UOM_Conversion",
            "value": 17.5
        },
        {
            "source": "MProjectLine",
            "target": "MProjectLine",
            "value": 5.5
        },
        {
            "source": "MTaxDeclarationAcct",
            "target": "X_Fact_Acct",
            "value": 1.0
        },
        {
            "source": "ExpenseSOrder",
            "target": "MConversionRate",
            "value": 0.5
        },
        {
            "source": "FinStatement",
            "target": "X_AD_ClientInfo",
            "value": 0.5
        },
        {
            "source": "MReplicationLog",
            "target": "X_AD_Replication_Log",
            "value": 4.0
        },
        {
            "source": "MSLACriteria",
            "target": "MSLACriteria",
            "value": 0.5
        },
        {
            "source": "MDocTypeCounter",
            "target": "X_C_DocType",
            "value": 3.5
        },
        {
            "source": "WebInfo",
            "target": "MPayment",
            "value": 0.5
        },
        {
            "source": "WebSessionCtx",
            "target": "Ctx",
            "value": 23.5
        },
        {
            "source": "EntityTypeRegister",
            "target": "MEntityType",
            "value": 0.5
        },
        {
            "source": "MAttributeInstance",
            "target": "MAttributeInstance",
            "value": 0.5
        },
        {
            "source": "ReplenishReport",
            "target": "X_M_Storage",
            "value": 1.5
        },
        {
            "source": "MDocActionRule",
            "target": "MDocBaseType",
            "value": 0.5
        },
        {
            "source": "MProductionLine",
            "target": "X_M_ProductionLine",
            "value": 4.0
        },
        {
            "source": "MStorage",
            "target": "MInOutLine",
            "value": 0.5
        },
        {
            "source": "ImportGLJournal",
            "target": "X_GL_JournalBatch",
            "value": 3.0
        },
        {
            "source": "MCommission",
            "target": "X_C_Commission",
            "value": 5.0
        },
        {
            "source": "MInvoiceLine",
            "target": "CLogger",
            "value": 1.5
        },
        {
            "source": "MFactAccumulation",
            "target": "MFactAccumulation",
            "value": 1.5
        },
        {
            "source": "MInOut",
            "target": "X_M_Product",
            "value": 2.0
        },
        {
            "source": "MChat",
            "target": "MChat",
            "value": 1.5
        },
        {
            "source": "PeriodControlStatus",
            "target": "CompiereUserException",
            "value": 1.0
        },
        {
            "source": "BPartnerOrgLink",
            "target": "MOrg",
            "value": 0.5
        },
        {
            "source": "RegisterSystem",
            "target": "DB",
            "value": 3.0
        },
        {
            "source": "MCostElement",
            "target": "X_M_CostElement",
            "value": 2.0
        },
        {
            "source": "InventoryCountCreate",
            "target": "X_M_InventoryLine",
            "value": 4.0
        },
        {
            "source": "MWFNextCondition",
            "target": "MWFNextCondition",
            "value": 2.0
        },
        {
            "source": "MAlert",
            "target": "X_AD_User_Roles",
            "value": 0.5
        },
        {
            "source": "MMovementConfirm",
            "target": "X_M_MovementConfirm",
            "value": 18.0
        },
        {
            "source": "MStorage",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "ImportAccount",
            "target": "X_I_ElementValue",
            "value": 2.0
        },
        {
            "source": "ImportBankStatement",
            "target": "MBankAccount",
            "value": 1.0
        },
        {
            "source": "MInOut",
            "target": "MBPartner",
            "value": 3.5
        },
        {
            "source": "MRegistration",
            "target": "MRegistration",
            "value": 1.0
        },
        {
            "source": "MPaymentTerm",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "UIWindowVO",
            "target": "VO",
            "value": 2.0
        },
        {
            "source": "MWFProcess",
            "target": "X_AD_WF_Process",
            "value": 15.0
        },
        {
            "source": "MPayment",
            "target": "X_C_BPartner",
            "value": 5.0
        },
        {
            "source": "MPOSKeyLayout",
            "target": "MPOSKey",
            "value": 0.5
        },
        {
            "source": "RequisitionPOCreate",
            "target": "CompiereSystemException",
            "value": 2.0
        },
        {
            "source": "ImportPayment",
            "target": "CompiereUserException",
            "value": 0.5
        },
        {
            "source": "MMediaServer",
            "target": "MMedia",
            "value": 1.5
        },
        {
            "source": "MLead",
            "target": "MStatus",
            "value": 2.0
        },
        {
            "source": "MCashBook",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "StorageCleanup",
            "target": "MMovementLine",
            "value": 1.0
        },
        {
            "source": "InOutGenerate",
            "target": "MInOutLine",
            "value": 7.5
        },
        {
            "source": "MProduct",
            "target": "X_C_UOM",
            "value": 0.5
        },
        {
            "source": "MPayment",
            "target": "ValueNamePair",
            "value": 0.5
        },
        {
            "source": "ImportContact",
            "target": "MUser",
            "value": 1.0
        },
        {
            "source": "ImportOrder",
            "target": "MOrder",
            "value": 6.0
        },
        {
            "source": "MRfQLineQty",
            "target": "MRfQLineQty",
            "value": 0.5
        },
        {
            "source": "MRfQResponse",
            "target": "X_C_RfQLineQty",
            "value": 1.0
        },
        {
            "source": "ProjectGenOrder",
            "target": "MOrder",
            "value": 0.5
        },
        {
            "source": "MInOut",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "MOrder",
            "target": "X_C_Project",
            "value": 5.0
        },
        {
            "source": "FinStatement",
            "target": "ProcessInfo",
            "value": 1.0
        },
        {
            "source": "MJournal",
            "target": "X_GL_JournalBatch",
            "value": 4.0
        },
        {
            "source": "MProjectLine",
            "target": "X_C_Project",
            "value": 1.0
        },
        {
            "source": "MRfQResponseLine",
            "target": "TimeUtil",
            "value": 1.5
        },
        {
            "source": "MIndex",
            "target": "DB",
            "value": 1.5
        },
        {
            "source": "DunningPrint",
            "target": "CompiereUserException",
            "value": 1.5
        },
        {
            "source": "MMovement",
            "target": "MMovement",
            "value": 13.5
        },
        {
            "source": "MPayment",
            "target": "X_C_PaymentAllocate",
            "value": 5.0
        },
        {
            "source": "MScheduler",
            "target": "X_AD_SchedulerRecipient",
            "value": 1.0
        },
        {
            "source": "MProductLocator",
            "target": "MProductLocator",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "ValueNamePair",
            "value": 0.5
        },
        {
            "source": "MBPartner",
            "target": "X_AD_User",
            "value": 1.0
        },
        {
            "source": "DistributionRun",
            "target": "MBPartner",
            "value": 3.0
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_PInstance",
            "value": 1.0
        },
        {
            "source": "MSchedulerLog",
            "target": "X_AD_Scheduler",
            "value": 0.5
        },
        {
            "source": "script",
            "target": "MultiPartElement",
            "value": 2.0
        },
        {
            "source": "MAsset",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "DunningPrint",
            "target": "X_AD_User",
            "value": 1.5
        },
        {
            "source": "MBPBankAccount",
            "target": "DB",
            "value": 1.0
        },
        {
            "source": "MContainer",
            "target": "MCStage",
            "value": 1.0
        },
        {
            "source": "MStorage",
            "target": "MStorage",
            "value": 8.5
        },
        {
            "source": "ImpFormat",
            "target": "ImpFormatRow",
            "value": 8.0
        },
        {
            "source": "InventoryCountCreate",
            "target": "MInventoryLine",
            "value": 5.5
        },
        {
            "source": "MMeasure",
            "target": "Msg",
            "value": 2.5
        },
        {
            "source": "MTemplate",
            "target": "MCStage",
            "value": 0.5
        },
        {
            "source": "MInvoiceLine",
            "target": "X_R_Request",
            "value": 5.0
        },
        {
            "source": "MAllocationHdr",
            "target": "DB",
            "value": 2.0
        },
        {
            "source": "ProductCost",
            "target": "X_C_AcctSchema",
            "value": 1.0
        },
        {
            "source": "DocWorkflowManager",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MPayment",
            "target": "ProcessCall",
            "value": 2.0
        },
        {
            "source": "MLocationLookup",
            "target": "Lookup",
            "value": 2.0
        },
        {
            "source": "MInventory",
            "target": "MInventory",
            "value": 13.5
        },
        {
            "source": "SLAGoalProcess",
            "target": "CompiereUserException",
            "value": 1.0
        },
        {
            "source": "MDataMigrationEntry",
            "target": "X_AD_DataMigrationEntry",
            "value": 8.5
        },
        {
            "source": "MMovementLine",
            "target": "Msg",
            "value": 1.5
        },
        {
            "source": "MProduct",
            "target": "MAccount",
            "value": 0.5
        },
        {
            "source": "MGLCategory",
            "target": "MGLCategory",
            "value": 1.5
        },
        {
            "source": "MDunningRunLine",
            "target": "MInvoice",
            "value": 1.5
        },
        {
            "source": "MCharge",
            "target": "X_C_AcctSchema",
            "value": 0.5
        },
        {
            "source": "MRecurring",
            "target": "MRecurringRun",
            "value": 0.5
        },
        {
            "source": "MReportLine",
            "target": "X_PA_ReportSource",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "MOrderLine",
            "value": 44.0
        },
        {
            "source": "MMediaDeploy",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MJournalBatch",
            "target": "X_C_DocType",
            "value": 1.0
        },
        {
            "source": "InOutGenerate",
            "target": "MStorage",
            "value": 0.5
        },
        {
            "source": "MMovementLineConfirm",
            "target": "MMovementLine",
            "value": 2.0
        },
        {
            "source": "MInOutLineConfirm",
            "target": "MInOutLineConfirm",
            "value": 0.5
        },
        {
            "source": "MWebProject",
            "target": "MTree",
            "value": 2.0
        },
        {
            "source": "MCostDetail",
            "target": "MOrderLine",
            "value": 0.5
        },
        {
            "source": "MRequestAction",
            "target": "MRequestAction",
            "value": 12.5
        },
        {
            "source": "MResourceType",
            "target": "X_S_ResourceType",
            "value": 2.0
        },
        {
            "source": "MBOMProduct",
            "target": "X_M_BOMProduct",
            "value": 17.0
        },
        {
            "source": "MMedia",
            "target": "MMediaServer",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "DB",
            "value": 5.5
        },
        {
            "source": "UIWindowVOFactory",
            "target": "UIWindowVOFT",
            "value": 2.0
        },
        {
            "source": "ProjectPhaseGenOrder",
            "target": "X_C_ProjectTask",
            "value": 3.5
        },
        {
            "source": "MBPGroup",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MMovement",
            "target": "MMovementLine",
            "value": 3.5
        },
        {
            "source": "CalloutPayment",
            "target": "MInvoice",
            "value": 1.5
        },
        {
            "source": "MRequest",
            "target": "MRequestUpdate",
            "value": 2.0
        },
        {
            "source": "AllocationAuto",
            "target": "X_C_Payment",
            "value": 13.0
        },
        {
            "source": "PP_Optimal",
            "target": "PP_Optimal",
            "value": 1.5
        },
        {
            "source": "DisplayType",
            "target": "FieldType",
            "value": 2.0
        },
        {
            "source": "MMovement",
            "target": "X_M_MovementConfirm",
            "value": 1.0
        },
        {
            "source": "InventoryCountCreate",
            "target": "MInventory",
            "value": 1.5
        },
        {
            "source": "MMovement",
            "target": "MTransaction",
            "value": 2.0
        },
        {
            "source": "MDunningRunEntry",
            "target": "MDunningRun",
            "value": 1.5
        },
        {
            "source": "MBankStatement",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MMediaDeploy",
            "target": "MMediaDeploy",
            "value": 1.5
        },
        {
            "source": "FinStatement",
            "target": "MReportTree",
            "value": 3.5
        },
        {
            "source": "MBankStatementLoader",
            "target": "MBankStatementLoader",
            "value": 1.5
        },
        {
            "source": "ImportOrder",
            "target": "X_C_BPartner_Location",
            "value": 3.0
        },
        {
            "source": "CopyImportFormat",
            "target": "X_AD_ImpFormat",
            "value": 3.0
        },
        {
            "source": "MWFActivity",
            "target": "NamePair",
            "value": 0.5
        },
        {
            "source": "MBankStatementMatcher",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MBankStatementLine",
            "target": "X_C_Invoice",
            "value": 0.5
        },
        {
            "source": "MUOM",
            "target": "CLogger",
            "value": 1.0
        },
        {
            "source": "MRegistrationValue",
            "target": "X_A_RegistrationValue",
            "value": 4.0
        },
        {
            "source": "ViewImportFromDB",
            "target": "Trx",
            "value": 0.5
        },
        {
            "source": "MInvoice",
            "target": "ReportEngine",
            "value": 0.5
        },
        {
            "source": "MCashLine",
            "target": "X_C_DocType",
            "value": 1.0
        },
        {
            "source": "MBOMProduct",
            "target": "X_M_Product",
            "value": 1.5
        },
        {
            "source": "ScheduleUtil",
            "target": "ScheduleUtil",
            "value": 4.5
        },
        {
            "source": "MSLAGoal",
            "target": "MSLAMeasure",
            "value": 0.5
        },
        {
            "source": "MOrderLine",
            "target": "X_M_InOut",
            "value": 1.0
        },
        {
            "source": "MOrder",
            "target": "MDocTypeCounter",
            "value": 1.0
        },
        {
            "source": "MStatusCategory",
            "target": "MStatusCategory",
            "value": 2.0
        },
        {
            "source": "DeliveryAccuracy",
            "target": "DB",
            "value": 0.5
        },
        {
            "source": "MProductBOM",
            "target": "MProduct",
            "value": 2.0
        },
        {
            "source": "MMatchInv",
            "target": "DB",
            "value": 3.0
        },
        {
            "source": "MElement",
            "target": "X_C_Element",
            "value": 2.0
        },
        {
            "source": "MWFActivity",
            "target": "X_AD_WF_Responsible",
            "value": 2.0
        },
        {
            "source": "MClickCount",
            "target": "MClickCount",
            "value": 2.0
        },
        {
            "source": "MJournal",
            "target": "MPeriod",
            "value": 10.0
        },
        {
            "source": "MProductLocator",
            "target": "X_M_Product",
            "value": 2.0
        },
        {
            "source": "ScheduleUtil",
            "target": "Env",
            "value": 0.5
        },
        {
            "source": "DunningPrint",
            "target": "DunningPrint",
            "value": 0.5
        },
        {
            "source": "MPInstancePara",
            "target": "X_AD_PInstance_Para",
            "value": 2.0
        },
        {
            "source": "MRequestType",
            "target": "MRequest",
            "value": 0.5
        },
        {
            "source": "MPaymentTerm",
            "target": "X_C_PaySchedule",
            "value": 1.0
        },
        {
            "source": "MMovement",
            "target": "MMovementLineMA",
            "value": 1.5
        },
        {
            "source": "MInOutConfirm",
            "target": "X_M_InOutLine",
            "value": 12.0
        },
        {
            "source": "MPayment",
            "target": "X_C_Invoice",
            "value": 2.5
        },
        {
            "source": "MAlertProcessorLog",
            "target": "X_AD_AlertProcessorLog",
            "value": 3.0
        },
        {
            "source": "MIndexColumn",
            "target": "X_AD_Column",
            "value": 0.5
        },
        {
            "source": "MLdapProcessor",
            "target": "CompiereProcessor",
            "value": 2.0
        },
        {
            "source": "MMatchPO",
            "target": "MMatchPO",
            "value": 8.5
        },
        {
            "source": "MInvoicePaySchedule",
            "target": "MInvoice",
            "value": 2.5
        },
        {
            "source": "ImportContact",
            "target": "X_AD_User",
            "value": 6.0
        },
        {
            "source": "MCostDetail",
            "target": "X_M_Cost",
            "value": 8.5
        },
        {
            "source": "VolumeTest",
            "target": "Util",
            "value": 1.0
        },
        {
            "source": "DistributionRun",
            "target": "X_M_Product",
            "value": 1.5
        },
        {
            "source": "ImportPayment",
            "target": "X_C_BankAccount",
            "value": 1.0
        },
        {
            "source": "MDiscountSchema",
            "target": "X_M_DiscountSchema",
            "value": 10.5
        },
        {
            "source": "MContactInterest",
            "target": "MContactInterest",
            "value": 4.5
        },
        {
            "source": "MOrderLine",
            "target": "MReturnPolicy",
            "value": 1.0
        },
        {
            "source": "MMovementConfirm",
            "target": "MPeriod",
            "value": 0.5
        },
        {
            "source": "ImportPayment",
            "target": "MPayment",
            "value": 8.5
        },
        {
            "source": "MInvoiceLine",
            "target": "MUOMConversion",
            "value": 4.5
        },
        {
            "source": "MPeriod",
            "target": "X_AD_OrgInfo",
            "value": 0.5
        },
        {
            "source": "MGoal",
            "target": "Ctx",
            "value": 0.5
        },
        {
            "source": "MRequestUpdate",
            "target": "MRefList",
            "value": 0.5
        },
        {
            "source": "MRfQResponseLine",
            "target": "MRfQResponseLine",
            "value": 1.0
        },
        {
            "source": "MMovement",
            "target": "X_M_MovementLine",
            "value": 18.5
        },
        {
            "source": "MInvoiceBatchLine",
            "target": "ResponseVO",
            "value": 1.5
        },
        {
            "source": "MWorkflow",
            "target": "X_AD_Workflow",
            "value": 27.0
        },
        {
            "source": "MPackage",
            "target": "X_M_Shipper",
            "value": 0.5
        },
        {
            "source": "MMovementConfirm",
            "target": "MMovement",
            "value": 0.5
        },
        {
            "source": "MCashLine",
            "target": "ChangeVO",
            "value": 0.5
        },
        {
            "source": "ScheduleUtil",
            "target": "Msg",
            "value": 6.0
        },
        {
            "source": "MScheduler",
            "target": "X_AD_PInstance_Para",
            "value": 2.0
        },
        {
            "source": "AcctSchemaDefaultCopy",
            "target": "DB",
            "value": 12.5
        },
        {
            "source": "MWFNode",
            "target": "TranslationTable",
            "value": 1.5
        },
        {
            "source": "MMovementLineConfirm",
            "target": "X_M_MovementConfirm",
            "value": 0.5
        },
        {
            "source": "MPaySelectionCheck",
            "target": "X_C_Payment",
            "value": 14.0
        },
        {
            "source": "MContainer",
            "target": "MIndex",
            "value": 1.5
        },
        {
            "source": "MStatusCategory",
            "target": "Msg",
            "value": 0.5
        },
        {
            "source": "ReplenishReport",
            "target": "DB",
            "value": 10.5
        },
        {
            "source": "MLot",
            "target": "X_M_Lot",
            "value": 4.0
        },
        {
            "source": "MGroup",
            "target": "MGroup",
            "value": 0.5
        },
        {
            "source": "MWFProcess",
            "target": "ProcessInfo",
            "value": 1.5
        },
        {
            "source": "MUserMail",
            "target": "X_W_MailMsg",
            "value": 0.5
        },
        {
            "source": "MWFActivity",
            "target": "X_C_BPartner",
            "value": 0.5
        },
        {
            "source": "MScheduler",
            "target": "MPInstance",
            "value": 1.0
        },
        {
            "source": "MChangeRequest",
            "target": "X_R_Group",
            "value": 1.0
        },
        {
            "source": "MTreeNode",
            "target": "X_AD_TreeNode",
            "value": 2.0
        },
        {
            "source": "MAccount",
            "target": "X_C_ValidCombination",
            "value": 2.0
        }
    ]


//set up the simulation and add forces  
var simulation = d3.forceSimulation()
                    .nodes(nodes_data);
                              
var link_force =  d3.forceLink(links_data)
                        .id(function(d) { return d.id; });            
         
var charge_force = d3.forceManyBody()
    .strength(-100); 
    
var center_force = d3.forceCenter(width / 2, height / 2);  
                      
simulation
    .force("charge_force", charge_force)
    .force("center_force", center_force)
    .force("links",link_force)
 ;

        
//add tick instructions: 
simulation.on("tick", tickActions );

//add encompassing group for the zoom 
var g = svg.append("g")
    .attr("class", "everything");

//draw lines for the links 
var link = g.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links_data)
    .enter().append("line")
    .attr("stroke-width", 5)
    .attr("source", function(l) {
        return l.source.id;
    }).attr("target", function(l) {
        return l.target.id;
    })
    .style("stroke", "#ececec");        

//draw circles for the nodes 
var node = g.append("g")
        .attr("class", "nodes") 
        .selectAll("circle")
        .data(nodes_data)
        .enter()
        .append("circle")
        .attr("r", radius)
        .attr("title", function(d) {
            return d.id;
        })
        .attr("fill", circleColour)
        .attr("cluster", function(d) {
            return d.cluster;
        })
        .on("click", node_click);
 
 
//add drag capabilities  
var drag_handler = d3.drag()
    .on("start", drag_start)
    .on("drag", drag_drag)
    .on("end", drag_end);   
    
drag_handler(node);


//add zoom capabilities 
var zoom_handler = d3.zoom()
    .on("zoom", zoom_actions);

zoom_handler(svg);     

/** Functions **/

//Function to choose what color circle we have
//Let's return blue for males and red for females
function circleColour(d){
    d.cluster >>>= 0;
    var b = d.cluster & 0xFF,
        g = (d.cluster & 0xFF00) >>> 8,
        r = (d.cluster & 0xFF0000) >>> 16,
        a = ( (d.cluster & 0xFF000000) >>> 24 ) / 255 ;
    return fullColour(r,g,b);
}


function rgbToHex(rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function fullColour (r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

//Function to choose the line colour and thickness 
//If the link type is "A" return green 
//If the link type is "E" return red 
function linkColour(d) {
    d.cluster >>>= 0;
    var b = d.cluster & 0xFF,
        g = (d.cluster & 0xFF00) >>> 8,
        r = (d.cluster & 0xFF0000) >>> 16,
        a = ( (d.cluster & 0xFF000000) >>> 24 ) / 255 ;
    return "rgba(" + [r, g, b, a].join(",") + ")";
}
//Drag functions 
//d is the node 
function drag_start(d) {
 if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

//make sure you can't drag the circle outside the box
function drag_drag(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function drag_end(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

//Zoom functions 
function zoom_actions(){
    g.attr("transform", d3.event.transform)
}

function tickActions() {
    //update circle positions each tick of the simulation 
       node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
        
    //update link positions 
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
} 

function node_click(d) {
    reset_colors();
    document.querySelector("input").value = d.id;
    same_cluster = document.querySelectorAll('[cluster="' + d.cluster + '"]');
    linked_to = document.querySelectorAll('[source="' + d.id + '"], [target="' + d.id + '"]');
    for(i=0; i<same_cluster.length; i++) {
        same_cluster[i].style.fill = "#ff0000";
    }
    for(i=0; i<linked_to.length; i++) {
        linked_to[i].style.stroke = "#0000ff";
    }
}

function reset_colors() {
    circles = document.querySelectorAll("circle");
    for(i=0; i<circles.length; i++) {
        circles[i].style.fill = "#000";
    }
    lines = document.querySelectorAll("line");
    for(i=0; i<lines.length; i++) {
        lines[i].style.stroke = "#ececec";
    }
}
})
