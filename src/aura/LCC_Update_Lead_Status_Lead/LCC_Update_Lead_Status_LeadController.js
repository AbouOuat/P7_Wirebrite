({
    accept : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },
    
    updateLeadStatusToContacted : function (component, event, helper) {
        //Récupérer 
        var leadId = component.get("v.recordId");
        helper.updateStatus(component, leadId);
        
    }
})