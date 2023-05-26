public class UpdateLeadStatusController {
  	@AuraEnabled
    public static Lead leadStatusToContacted (Id leadId){
        Lead leadToUpdate = [SELECT Id,Status FROM Lead WHERE Id=:leadId];
        leadToUpdate.Status = 'Contacted';
        update leadToUpdate;
        return leadToUpdate;
    }
}