/**
 * Created by aboub on 23/05/2023.
 */

@IsTest
private class UpdateLeadStatusControllerTest {
    @TestSetup
    static void theInput () {
        Lead theLead = new Lead (LastName = 'Lead 1', FirstName = 'First 1', Company = 'Company 1');
        insert theLead;
    }
    @IsTest
    static void theTest ()
    {
        Lead theLeadToUpdate = [SELECT Id from Lead WHERE LastName='Lead 1'];
        Test.startTest();
        Lead leadToCheck = UpdateLeadStatusController.leadStatusToContacted(theLeadToUpdate.Id);
        Test.stopTest();
        System.assertEquals('Contacted',leadToCheck.Status);

    }

}