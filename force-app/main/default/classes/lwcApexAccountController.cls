public with sharing class lwcApexAccountController {
   @AuraEnabled(cacheable=true)
   public static List<Account> getCustomLookupAccount(String accountName){
    List<Account> accountLookupList = new List<Account>();   
    try {
           if(accountName != ''){
               string accountNameQuery = '%' + accountName + '%';
               accountLookupList = [Select Id, Name From Account Where Name like:accountNameQuery];
               return accountLookupList;
           }
       } catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
       }
       return accountLookupList;
   }
}
