/**
 * Created by aboub on 15/05/2023.
 */

public with sharing class OpportunitySearchApex {

    @AuraEnabled (Cacheable=true)
    public static List <Opportunity> searchOpportunity (String theKeyword, Id accountId)
    {
        String searchquery='select id,Name,StageName,CloseDate,Amount from Opportunity where name like \'%'+theKeyword+'%\' and AccountId = :accountId';
        return (Database.query(searchquery));
    }

}