sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForDetailPage6: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"descripcion": "",
				"fechaEntrada": null,
				"___FK_4022f289790506941b059c22_00012": ""
			};
		},
		getDefaultValuesForDetailPage5: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Nombre": "",
				"FechaInicio": null,
				"___FK_8bf63c95247bd7e01b0588bc_00025": "",
				"Estado": "",
				"___FK_8bf63c95247bd7e01b0588bc_00035": "",
				"Descripcion": "",
				"Tipo": ""
			};
		},
		getDefaultValuesForDetailPage2: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Name": "",
				"PhoneNumer": "",
				"Email": "",
				"Website": "",
				"CompanySize": "",
				"CompanyLogo": "",
				"PrimaryContact": "",
				"SecondContact": ""
			};
		}
	};
});
