# Angular Kochrezept

Zielsetzung: Daten vom Backend im Frontend anzeigen, bearbeiten und löschen. 

1. Neues Angular-Projekt anlegen
    - Im Terminal folgenden Befehl eingeben:
    - `ng new <projektname>`
    - siehe: https://angular.io/cli/new

    - Erste Frage beim Anlegen: `Would you like to add Angular routing? (y/N)`
        - y: yes
        - N: No (defaultwert weil großgeschrieben)
    - Which stylesheet format would you like to use?
        - css
    - Nach den beiden Fragen wird ein Order mit dem Namen <projektname> angelegt. In diesem Ordern befinden sich ein git-Repository. In dem dortigen .gitignore wird bereits alles was man sich automatisch generieren kann ignoriert. 

2. In den Ordner <projektname> im Terminal wechseln
    - cd <projektname> (ggf. mit Tabulator vervollständigen)

2.5. Angular material dependency hinzufügen
     - `ng add @angular/material@13.0.0`
     - Bei Folgefragen immer den Defaultwert (immer Enter drücken)

2.6 die package.json muss folgendermaßen aussehen:

```json
{
  "name": "matura-uebung",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^15.2.1",
    "@angular/cdk": "^15.2.1",
    "@angular/common": "^15.2.1",
    "@angular/compiler": "^15.2.1",
    "@angular/core": "^15.2.1",
    "@angular/forms": "^15.2.1",
    "@angular/material": "^15.2.1",
    "@angular/platform-browser": "^15.2.1",
    "@angular/platform-browser-dynamic": "^15.2.1",
    "@angular/router": "^15.2.1",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^15.2.1",
    "@angular/cli": "~15.2.1",
    "@angular/compiler-cli": "^15.2.1",
    "@types/jasmine": "~4.0.0",
    "jasmine-core": "~4.1.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.0.0",
    "karma-jasmine-html-reporter": "~1.7.0",
    "typescript": "~4.9.5"
  }
}
```

3. Programm starten
    - `ng serve`

4. http://localhost:4200 im Browser aufrufen um zu prüfen ob das Programm lauffähig ist
    - mit Strg-Klick auf den Link in der Konsole kommt man sofort in den Browser

(4.5). Programm stoppen mit Strg+C in der Konsole

(ggf.). Neuen Component hinzufügen
    - langform: `ng generate component <componentname>`
    - kurzform: `ng g c <componentname>`

5. Neue Angular Material Address Form Schematic hinzufügen:
    - `ng generate @angular/material:address-form <component-name>`

6. Die Schematic ist unter /src/app/<component-name> aufrufbar

7. Programm starten

8. Models basierend auf dem  Backend erstellen

    - http://localhost:8080/api/pracitioner aufrufen. Dazu muss der Backend-Server bereits laufen.
    - Das dort vorhandene JSON auf json2ts.com einfügen
    - Neue Datei models.ts erstellen im /src Ordner
    - default namespace löschen
    - RootObject in Practitioner umbenennen

9. Data Service hinzufügen
    - `ng g s Pracitioner`

10. HTTP-Modul hinzufügen
    - siehe: https://angular.io/guide/http
    - Im app.module.ts `import { HttpClientModule } from '@angular/common/http';`
    - Das Module bei den Imports dazugeben

11. Im Data service den HttpClient dazugeben im Konstruktor
    - `constructor(private http: HttpClient) {...}`

12. Methode zum abfragen aller Practitioner hinzufügen
    - dazu die Adresse in welcher alle Practitioner im Backend sind holen

13. AddressForm Schemaitc an Pracitioner anpassen
    - states rauslöschen
    - onSubmit löschen
    - addressForm in practitionerForm umbenennen
    - JSON vom server reinkopieren und dann im form builder umsetzen
    
14. Aufbau der FormGroup im ts- teil
    - JSON vom Server soll als FormGroup vorliegen
    - In dem JSON gibt es Werte, Objekte und Listen
        - Listen im JSON [] werden als `new FormArray([...])` dargestellt
        - Objekte im JSON {} werden als `new FormGroup({...})` dargestellt
        - Werte im JSON ("", null, 0, true) werden als `new FormControl<string>("...")` dargestellt
        - Ausnahme: Date, diese Javascript-Klasse kann direkt als Wert dargestellt werden, bei anderen Klassen können nur einzelen
        properties geändert werden. 

15. Aufbau der FormGroup im html-teil
    - alles rauslöschen
    - *ng-for hinzufügen in `<span>` also z.B `let identifier of practitiionierForm.controls.identifier.controls`
    - `[fromGroup]="identifier"` in `<span>` hinzufügen
    - Im ngOnInit die ID der Route abfragen, siehe [hier](https://angular.io/guide/router)
    -  

    
16. Routen definieren
    - Man geht in `app.routing.module.ts`
    - Zugriff via app.module.ts in den imports
    - In dem Array Routes muss man ein Route-Objekt hinzufügen mit folgenden Werten
        - {"path": "/pracitioner/:id", component: PractitionerFormComponent}
    
    
