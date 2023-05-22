import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class DataService {

    constructor(
      private http: HttpClient
    ) {}

    public getProfiles() {
      return this.http.get('http://localhost:8080/api/v1/getProfileNamesFromProject/T-Helper');
      // return {"response":[{"name":"Jack-original","dateTimeLatestResource":"2023-05-22T15:07:23.000+00:00"},{"name":"Jack-updated","dateTimeLatestResource":"2022-09-15T20:53:39.000+00:00"}]};
    }

    public getFitnessData() {
      return this.http.get('http://localhost:8080/api/v1/getQuery/Fitness-stats/18b78e0b-a86c-4355-9810-43f0e2b64917/detailResults/09fa41c7-8103-4ac3-9ca0-ed5b898b1914');
      // return {"response":[{"queryResultId":"09fa41c7-8103-4ac3-9ca0-ed5b898b1914","queryResultsList":[{"No":"760","Gewicht in kg":"86,8","Datum":"31-03-2023 12:29:51","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"759","Gewicht in kg":"86,8","Datum":"30-03-2023 09:10:58","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"758","Gewicht in kg":"87,1","Datum":"29-03-2023 06:47:39","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"757","Gewicht in kg":"86,6","Datum":"28-03-2023 07:36:58","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"756","Gewicht in kg":"86,7","Datum":"27-03-2023 20:59:34","Spiermassa in KG":"65,4","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"54,7","Notities":"Yay, nieuw spiermassarecord!","Meting door:":"Better Bodies apparaat","Lichaamsvocht in KG":"47,4","Botmassa in KG":"3,4","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"20,7","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"755","Gewicht in kg":"86,0","Datum":"27-03-2023 08:42:34","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"754","Gewicht in kg":"86,3","Datum":"26-03-2023 13:57:45","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren cheatday; 3750 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"753","Gewicht in kg":"85,6","Datum":"25-03-2023 15:26:29","Spiermassa in KG":"65,91","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"56,0","Notities":"Basicfit Teteringsedijk","Meting door:":"BasicFit apparaat","Lichaamsvocht in KG":"47,94","Botmassa in KG":"3,42","Spiermassa in PERCENTAGE (nu met kommagetal!)":"77,0","Vetpercentage in %":"18,0","Botmassa in PERCENTAGE (nu met kommagetal)":"4,0"},{"No":"752","Gewicht in kg":"86,0","Datum":"25-03-2023 12:44:39","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"751","Gewicht in kg":"86,0","Datum":"24-03-2023 12:44:58","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"750","Gewicht in kg":"86,2","Datum":"23-03-2023 11:10:29","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"749","Gewicht in kg":"87,0","Datum":"22-03-2023 08:56:45","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"748","Gewicht in kg":"85,8","Datum":"21-03-2023 07:44:24","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"747","Gewicht in kg":"85,7","Datum":"20-03-2023 08:49:01","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"746","Gewicht in kg":"85,6","Datum":"19-03-2023 13:15:56","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren cheatday, circa 3500 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"745","Gewicht in kg":"85,9","Datum":"18-03-2023 12:22:00","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"744","Gewicht in kg":"85,7","Datum":"17-03-2023 11:22:19","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"743","Gewicht in kg":"85,7","Datum":"16-03-2023 12:44:19","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"742","Gewicht in kg":"85,4","Datum":"15-03-2023 06:43:58","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"741","Gewicht in kg":"84,4","Datum":"14-03-2023 08:52:53","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"740","Gewicht in kg":"84,8","Datum":"13-03-2023 21:09:21","Spiermassa in KG":"64,9","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"55,5","Notities":"Wauw, wie weet heeft die pre workout wat serieuze gains gebracht dankzij die goeie training? Of is dit het creatine of hoger watergewicht?","Meting door:":"Better Bodies apparaat","Lichaamsvocht in KG":"47,1","Botmassa in KG":"3,4","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"19,4","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"739","Gewicht in kg":"84,5","Datum":"13-03-2023 08:56:36","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren cheatday; circa 3800 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"738","Gewicht in kg":"84,5","Datum":"12-03-2023 12:04:53","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"737","Gewicht in kg":"84,6","Datum":"11-03-2023 12:25:12","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Pre-workout (gift bij bestelling van XXL nutrition) uitgeprobeerd. Beviel goed, maar wauw wat ging mijn hart (voor mijn gevoel) te keer.. en ik \"voelde\" echt dat extra beetje power.","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"736","Gewicht in kg":"84,3","Datum":"10-03-2023 11:00:54","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"735","Gewicht in kg":"84,5","Datum":"08-03-2023 06:30:43","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Plotselinge gewichtstoename, is van creatine?<br> 250 kcal erbij vanaf nu; 3750 kcal dieet!","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"734","Gewicht in kg":"83,8","Datum":"07-03-2023 07:32:09","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"733","Gewicht in kg":"83,7","Datum":"06-03-2023 08:59:11","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Start creatinekuur vandaag","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"732","Gewicht in kg":"82,8","Datum":"05-03-2023 13:17:24","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Cheatday vandaag, circa 3750 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"731","Gewicht in kg":"84,1","Datum":"04-03-2023 12:28:44","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"730","Gewicht in kg":"83,6","Datum":"03-03-2023 16:19:49","Spiermassa in KG":"64,37","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"56,0","Notities":"","Meting door:":"BasicFit apparaat","Lichaamsvocht in KG":"46,82","Botmassa in KG":"3,34","Spiermassa in PERCENTAGE (nu met kommagetal!)":"77,0","Vetpercentage in %":"19,0","Botmassa in PERCENTAGE (nu met kommagetal)":"4,0"},{"No":"729","Gewicht in kg":"84,0","Datum":"03-03-2023 11:24:37","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"728","Gewicht in kg":"83,6","Datum":"02-03-2023 12:53:50","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"727","Gewicht in kg":"83,6","Datum":"01-03-2023 06:32:26","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"726","Gewicht in kg":"83,7","Datum":"27-02-2023 21:14:34","Spiermassa in KG":"63,4","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"54,8","Notities":"","Meting door:":"Better Bodies apparaat","Lichaamsvocht in KG":"45,9","Botmassa in KG":"3,3","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"20,3","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"725","Gewicht in kg":"83,5","Datum":"27-02-2023 08:56:52","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"724","Gewicht in kg":"83,1","Datum":"26-02-2023 11:45:38","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren cheatday gehad, circa 3500 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"723","Gewicht in kg":"83,3","Datum":"19-02-2023 12:43:21","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"722","Gewicht in kg":"83,6","Datum":"17-02-2023 15:28:49","Spiermassa in KG":"63,9","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Volgens de laatste meting is vooral het vet% gestegen, maar is de spiermassa en vochtgehalte gelijk gebleven. Vanwege mantelzorg aan mijn ma ben ik nu wel op de middag bij Better Bodies en is mijn voeding voor de dag anders, maar toch jammer dat ik niet meer spiermassa bouw in deze cruciale periode voor de cut. Had het wel verwacht..","Meting door:":"Better Bodies apparaat","Lichaamsvocht in KG":"46,2","Botmassa in KG":"3,3","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"19,6","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"721","Gewicht in kg":"83,0","Datum":"15-02-2023 12:55:18","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Vetpercentage is nu opeens snel gestegen gezien de geschiedenis van deze metingen. Komt dat omdat deze metingen ruk zijn (ondanks elke keer uitgevoerd door Lorraine?) of omdat mijn lichaam recent spiermassa heeft verloren en omgezet naar vet waardoor het gewicht gelijk is gebleven?<br>Toen zij mijn buikomvang deed meten deed ik echter wel deze keer mij uitblazen (en daarmee de buik een beetje opzetten). Lorraine zei ook dat het vooral mijn buik was dat het vetpercentage deed verhogen.","Meting door:":"Health Advies Breda (handmatig - tangen)","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"16,1","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"720","Gewicht in kg":"83,8","Datum":"15-02-2023 07:10:04","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"719","Gewicht in kg":"83,6","Datum":"14-02-2023 08:59:18","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"718","Gewicht in kg":"83,7","Datum":"13-02-2023 08:49:54","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"717","Gewicht in kg":"84,0","Datum":"12-02-2023 13:25:35","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gusteren cheatday; 3750 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"716","Gewicht in kg":"83,1","Datum":"11-02-2023 11:28:39","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"715","Gewicht in kg":"82,4","Datum":"10-02-2023 11:38:32","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"714","Gewicht in kg":"83,5","Datum":"08-02-2023 06:51:11","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"713","Gewicht in kg":"83,0","Datum":"07-02-2023 08:46:01","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"712","Gewicht in kg":"83,2","Datum":"05-02-2023 11:57:50","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"711","Gewicht in kg":"83,2","Datum":"04-02-2023 12:42:55","Spiermassa in KG":"64,9","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"56,0","Notities":"Basicfit Teteringsedijk","Meting door:":"BasicFit apparaat","Lichaamsvocht in KG":"46,59","Botmassa in KG":"3,33","Spiermassa in PERCENTAGE (nu met kommagetal!)":"78,0","Vetpercentage in %":"18,0","Botmassa in PERCENTAGE (nu met kommagetal)":"4,0"},{"No":"710","Gewicht in kg":"83,1","Datum":"04-02-2023 10:14:36","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"709","Gewicht in kg":"83,2","Datum":"03-02-2023 10:05:32","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"708","Gewicht in kg":"82,7","Datum":"02-02-2023 06:33:29","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"707","Gewicht in kg":"83,3","Datum":"01-02-2023 08:50:29","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"706","Gewicht in kg":"83,1","Datum":"31-01-2023 07:31:31","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"705","Gewicht in kg":"83,0","Datum":"30-01-2023 06:30:27","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"704","Gewicht in kg":"82,8","Datum":"29-01-2023 11:13:25","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren cheatday gehad, circa 3600 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"703","Gewicht in kg":"83,0","Datum":"28-01-2023 11:32:32","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"702","Gewicht in kg":"82,3","Datum":"27-01-2023 10:30:22","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"701","Gewicht in kg":"82,5","Datum":"26-01-2023 08:50:56","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"700","Gewicht in kg":"82,5","Datum":"24-01-2023 07:24:00","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"699","Gewicht in kg":"82,6","Datum":"23-01-2023 06:27:24","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"698","Gewicht in kg":"82,1","Datum":"22-01-2023 12:30:49","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"697","Gewicht in kg":"81,3","Datum":"21-01-2023 14:17:32","Spiermassa in KG":"63,41","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"56,0","Notities":"","Meting door:":"BasicFit apparaat","Lichaamsvocht in KG":"45,53","Botmassa in KG":"3,25","Spiermassa in PERCENTAGE (nu met kommagetal!)":"78,0","Vetpercentage in %":"18,0","Botmassa in PERCENTAGE (nu met kommagetal)":"4,0"},{"No":"696","Gewicht in kg":"82,1","Datum":"21-01-2023 11:58:35","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"695","Gewicht in kg":"81,9","Datum":"20-01-2023 11:08:23","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"694","Gewicht in kg":"82,4","Datum":"19-01-2023 09:05:21","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"693","Gewicht in kg":"83,5","Datum":"18-01-2023 12:40:46","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Health Advies Breda (handmatig - tangen)","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"14,1","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"692","Gewicht in kg":"82,5","Datum":"18-01-2023 08:50:40","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"691","Gewicht in kg":"82,3","Datum":"17-01-2023 07:37:14","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"690","Gewicht in kg":"82,7","Datum":"16-01-2023 21:11:53","Spiermassa in KG":"63,9","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"55,9","Notities":"","Meting door:":"Better Bodies apparaat","Lichaamsvocht in KG":"46,2","Botmassa in KG":"3,3","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"18,8","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"689","Gewicht in kg":"82,2","Datum":"16-01-2023 06:33:38","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Geen cheatday dit afgelopen weekend","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"688","Gewicht in kg":"81,6","Datum":"15-01-2023 12:26:26","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"687","Gewicht in kg":"81,8","Datum":"13-01-2023 11:33:57","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"686","Gewicht in kg":"81,7","Datum":"12-01-2023 08:52:10","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"685","Gewicht in kg":"81,8","Datum":"11-01-2023 08:46:36","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"684","Gewicht in kg":"81,3","Datum":"10-01-2023 08:51:52","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"683","Gewicht in kg":"82,1","Datum":"09-01-2023 06:24:40","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"682","Gewicht in kg":"81,0","Datum":"07-01-2023 11:24:37","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"681","Gewicht in kg":"80,9","Datum":"06-01-2023 13:35:52","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"680","Gewicht in kg":"81,2","Datum":"05-01-2023 13:09:05","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"679","Gewicht in kg":"81,5","Datum":"04-01-2023 13:03:06","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Lunch van 4 volkorenbrood met pindakaas, banaan, jam en humus vergeten op te eten!<br>Maar wel proteinebar op van 30gr proteine en circa 300 kcal.","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"678","Gewicht in kg":"80,8","Datum":"03-01-2023 13:13:37","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Afgelopen ~3 dagen waren vakantie Parijs, cheatdays maar wel met minimaal benodigde proteine inname (160gr).<br>Totaal aan calorien per dag ingenomen zal rond de 2500 liggen.","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"677","Gewicht in kg":"81,5","Datum":"30-12-2022 06:17:05","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"676","Gewicht in kg":"81,4","Datum":"29-12-2022 14:28:46","Spiermassa in KG":"63,49","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"57,0","Notities":"Meting bij Teteringsedijk, laatste meting van Basicfitapparaat van 2022","Meting door:":"BasicFit apparaat","Lichaamsvocht in KG":"46,4","Botmassa in KG":"3,26","Spiermassa in PERCENTAGE (nu met kommagetal!)":"78,0","Vetpercentage in %":"18,0","Botmassa in PERCENTAGE (nu met kommagetal)":"4,0"},{"No":"675","Gewicht in kg":"80,8","Datum":"28-12-2022 12:48:52","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"674","Gewicht in kg":"81,0","Datum":"27-12-2022 13:42:12","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren 2de kerstdag ala cheatday gehad; circa 3600 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"673","Gewicht in kg":"82,5","Datum":"26-12-2022 11:15:22","Spiermassa in KG":"63,5","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"55,8","Notities":"Positief, maar ver is erg hoog ineens. Wel werd mij door Ad van Better Bodoes verteld dat vet% in de ochtend hoger is dan later op de dag?","Meting door:":"Better Bodies apparaat","Lichaamsvocht in KG":"46,0","Botmassa in KG":"3,3","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"19,0","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"672","Gewicht in kg":"80,6","Datum":"24-12-2022 13:38:10","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"671","Gewicht in kg":"81,1","Datum":"23-12-2022 07:26:24","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"670","Gewicht in kg":"80,6","Datum":"22-12-2022 13:47:54","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"669","Gewicht in kg":"80,9","Datum":"21-12-2022 12:49:22","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"668","Gewicht in kg":"80,8","Datum":"20-12-2022 12:43:41","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren uit eten geweest met collega's; veel te veel vlees en kcal, circa 4000","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"667","Gewicht in kg":"80,3","Datum":"19-12-2022 12:44:56","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"Gisteren cheatday gehad, circa 4000 kcal","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"666","Gewicht in kg":"80,3","Datum":"18-12-2022 11:34:07","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"665","Gewicht in kg":"79,6","Datum":"16-12-2022 12:42:53","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"664","Gewicht in kg":"80,0","Datum":"15-12-2022 08:51:23","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"663","Gewicht in kg":"80,0","Datum":"14-12-2022 08:46:24","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"662","Gewicht in kg":"79,8","Datum":"13-12-2022 07:32:00","Spiermassa in KG":"","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"","Notities":"","Meting door:":"Weegschaal thuis","Lichaamsvocht in KG":"","Botmassa in KG":"","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"","Botmassa in PERCENTAGE (nu met kommagetal)":""},{"No":"661","Gewicht in kg":"80,3","Datum":"12-12-2022 21:12:38","Spiermassa in KG":"62,9","Lichaamsvocht in PERCENTAGE (nu met kommagetal)":"56,8","Notities":"","Meting door:":"Better Bodies apparaat","Lichaamsvocht in KG":"45,6","Botmassa in KG":"3,3","Spiermassa in PERCENTAGE (nu met kommagetal!)":"","Vetpercentage in %":"17,6","Botmassa in PERCENTAGE (nu met kommagetal)":""}]}]}
    }
  }