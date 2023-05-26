/**
 * Created by aboub on 23/05/2023.
 */

@IsTest
private class OpportunitySearchApexTest {
    @TestSetup
    static void testSetup(){
        //
        Account theAccount = new Account (Name='Account1');
        insert theAccount;

        Opportunity theOpty = new Opportunity (Name='Opty1', StageName='Open', CloseDate=Date.today(), AccountId=theAccount.Id);
        insert theOpty;


    }

    @IsTest
    static void searchOpportunity () {
        Account theAccount = [SELECT Id from Account where Name ='Account1' LIMIT 1];
        Test.startTest();
        List <Opportunity> listOpty = OpportunitySearchApex.searchOpportunity('Opty1',theAccount.Id);
        Test.stopTest();
        System.assertEquals('Opty1', listOpty.get(0).Name);


    }
}