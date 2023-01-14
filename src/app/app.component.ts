import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {


  public appPages = [
    { title: 'Obecné', url: '/general', icon: 'newspaper' },
    { title: 'Podnikání', url: '/business', icon: 'business' },
    { title: 'Sport', url: '/sports', icon: 'basketball' },
    { title: 'Zábava', url: '/entertainment', icon: 'videocam' },
    { title: 'Technologie', url: '/technology', icon: 'laptop' },
    { title: 'Zdravý', url: '/health', icon: 'medkit' },
    { title: 'Věda', url: '/science', icon: 'rocket' },
    { title: 'Uložené', url: '/saved', icon: 'save' },
    // {title: 'Search', url: '/search', icon: 'search'}
  ];

  public Countries = [
    {title:'United Arab Emirates ',c:'ae'},
    {title:'Argentina',c:'ar'},
    {title:'Austria',c:'at'},
    {title:'Australia',c:'au'},
    {title:'Belgium',c:'be'},
    {title:'Bulgaria',c:'bg'},
    {title:'Brazil',c:'br'},
    {title:'Canada',c:'ca'},
    {title:'Switzerland',c:'ch'},
    {title:'China',c:'cn'},
    {title:'Costa Rica',c:'co'},
    {title:'Cuba',c:'cu'},
    {title:'Czechia',c:'cz'},
    {title:'Germany',c:'de'},
    {title:'Egypt',c:'eg'},
    {title:'France',c:'fr'},
    {title:'United Kingdom of Great Britain and Northern Ireland',c:'gb'},
    {title:'Greece',c:'gr'},
    {title:'Hong Kong',c:'hk'},
    {title:'Hungary',c:'hu'},
    {title:'Indonesia',c:'id'},
    {title:'Ireland',c:'ie'},
    {title:'Israel',c:'il'},
    {title:'India',c:'in'},
    {title:'Italy',c:'it'},
    {title:'Japan',c:'jp'},
    {title:'Korea',c:'kr'},
    {title:'Lithuania',c:'lt'},
    {title:'Latvia',c:'lv'},
    {title:'Morocco',c:'ma'},
    {title:'Mexico',c:'mx'},
    {title:'Malaysia',c:'my'},
    {title:'Nigeria',c:'ng'},
    // {title:'',c:'nl'},
    // {title:'',c:'no'},
    // {title:'',c:'nz'},
    // {title:'',c:'ph'},
    // {title:'',c:'pl'},
    // {title:'',c:'pt'},
    // {title:'',c:'ro'},
    // {title:'',c:'rs'},
    // {title:'',c:'ru'},
    // {title:'',c:'sa'},
    // {title:'',c:'se'},
    // {title:'',c:'sg'},
    // {title:'',c:'si'},
    // {title:'',c:'sk'},
    // {title:'',c:'th'},
    // {title:'',c:'tr'},
    // {title:'',c:'tw'},
    // {title:'',c:'ua'},
    // {title:'',c:'us'},
    // {title:'',c:'ve'},
    // {title:'',c:'za'},
    


  ]
  constructor() {}
}
