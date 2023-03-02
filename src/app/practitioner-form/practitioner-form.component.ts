import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


/*

  {
    "id": "643221yu",
    "text": null,
    "identifier": [
      {
        "id": "123lasd",
        "use": "usual",
        "type": null,
        "system": "urn:oid:1.2.36.146.595.217.0.1",
        "value": "12345",
        "period": null,
        "assigner": null
      }
    ],
    "active": false,
    "name": [
      {
        "id": "23923i",
        "use": "official",
        "text": null,
        "family": "Pirker",
        "given": [],
        "prefix": [],
        "suffix": [],
        "period": null
      },
      {
        "id": "23i",
        "use": "usual",
        "text": null,
        "family": "Pirker",
        "given": [
          "Simon",
          "Kein weiterer"
        ],
        "prefix": [
          "Ing.",
          "Dipl.Ing.",
          "Mag.",
          "Dr.phil.",
          "Dr."
        ],
        "suffix": [
          "Bakk",
          "MSc"
        ],
        "period": null
      }
    ],
    "telecom": [
      {
        "id": "123AF",
        "system": "phone",
        "value": "015552231123",
        "use": "work",
        "rank": 1,
        "period": {
          "id": "12sd",
          "start": "1998-12-31T23:00:00",
          "end": "2040-01-04T23:00:00"
        }
      },
      {
        "id": "AFU43D",
        "system": "email",
        "value": "pirker@spengergasse.at",
        "use": "work",
        "rank": 2,
        "period": null
      }
    ],
    "gender": "other",
    "birthDate": null,
    "deceasedBoolean": true,
    "deceasedDateTime": null,
    "address": [
      {
        "id": "23asdf",
        "use": "home",
        "type": "both",
        "text": null,
        "line": [
          "Simon Pirker",
          "Spengergasse 20",
          "1050 Wien"
        ],
        "city": "Wien",
        "district": "Wien",
        "state": "Wien",
        "postalcode": "1050",
        "country": "Österreich",
        "period": {
          "id": "32234asdfa",
          "start": "1998-12-31T23:00:00",
          "end": "2040-01-04T23:00:00"
        }
      }
    ]
  },
  {
    "id": "abc",
    "text": null,
    "identifier": [],
    "active": true,
    "name": [],
    "telecom": [],
    "gender": "female",
    "birthDate": null,
    "deceasedBoolean": false,
    "deceasedDateTime": null,
    "address": []
  }


*/ 

@Component({
  selector: 'app-practitioner-form',
  templateUrl: './practitioner-form.component.html',
  styleUrls: ['./practitioner-form.component.css']
})
export class PractitionerFormComponent {
  createIdentifierFormGroup(): FormGroup {
    return new FormGroup({
      
    });
  }
  practitionerForm = this.fb.group({
    id: new FormControl<string>(""),
    text: new FormControl<string>(""),
    identifier: new FormArray([this.createIdentifierFormGroup()]),
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });


  constructor(private fb: FormBuilder) {}
}
