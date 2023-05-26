/*
 * Created by aboub on 09/05/2023.
 */

import { LightningElement,api } from 'lwc';
import lstOpportunity from '@salesforce/apex/OpportunitySearchApex.searchOpportunity';

const columns = [
    {label : 'Opportunity Name', fieldName : 'TestName',
        type: "url", typeAttributes: { label: { fieldName: "Name" }, target: "_blank" },
    },
    {label : 'Stage Name', fieldName : 'StageName', type:"text"},
    {label : 'Close Date', fieldName : 'CloseDate'},
    {label : 'Amount', fieldName : 'Amount', type:"currency"},
 ];

/* const columns = [
    {label : 'Opportunity Name', fieldName : 'Name',
    type: "url",
        typeAttributes: { label: { fieldName: "Id" }, target: "_blank" },
        cellAttributes:{ class:{fieldName:'accountColor'}}
        },
    {label : 'Stage Name', fieldName : 'StageName', type:"text"},
    {label : 'Close Date', fieldName : 'CloseDate'},
    {label : 'Amount', fieldName : 'Amount', type:"currency"},
 ];
 */
export default class OpportunitySearchLwc extends LightningElement {
    columnsToDisplay = columns;
    @api recordId;
    opportunities;

    handleClick(event) {
        console.log("click on search");
        let value = this.template.querySelector('lightning-input[data-id="maRecherche"]')?.value;
        console.log(value);
        console.log("record : " + this.recordId);
        /*lstOpportunity ({theKeyword : value, accountId : this.recordId})
        .then((result)=>{
            this.opportunities = result;
            console.log(this.opportunities);
        }); */

        lstOpportunity ({theKeyword : value, accountId : this.recordId})
            .then((result)=>{
                let tempOpty = [];
                result.forEach(opty=>{
                  let newOpty = JSON.parse(JSON.stringify(opty));
                  //newOpty.Name = `/${opty.Id}`;
                  newOpty.TestName = "/"+ opty.Id;
                  tempOpty.push(newOpty);
                });
                this.opportunities = tempOpty;
                console.log(this.opportunities);
            });


            /*getOppList({ error, data }) {
               if (data) {
                var tempOppList = [];
                for (var i = 0; i < data.length; i++) {
                 let tempRecord = Object.assign({}, data[i]); //cloning object
                 tempRecord.recordLink = "/" + tempRecord.Id;
                 tempOppList.push(tempRecord);
                }
                this.oppList = tempOppList;
                this.error = undefined;
               } else if (error) {
                this.error = error;
                this.oppList = undefined;
               }
              } */

      }
}