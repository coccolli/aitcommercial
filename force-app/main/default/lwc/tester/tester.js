import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class Tester extends LightningElement {

    @wire (getContactList) contacts;

    greeting = 'World';

}