({
	updateStatus : function(component, leadId) {
		var action = component.get("c.leadStatusToContacted");
        action.setParams({leadId:leadId});
        action.setCallback(this,function(response){
            console.log("Bravo");
        })
        $A.enqueueAction(action);
    }
    
})