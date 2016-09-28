
$( document ).ready(function() {
    Papa.parse('data/petroleum_production.csv', {

        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(production_results) {
            for (var row = 0; row < production_results.data.length; row++) {
                var record = production_results.data[row];
                var locality = {
                    name: record.Locality,
                    totalPrimaryConsumption: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    totalPrimaryProduction: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    totalElectricityConsumption: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    totalElectricityGeneration: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    renewableElectricityConsumption: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    renewableElectricityProduction: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    renewableBiofuelConsumption: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    renewableBiofuelProduction: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    petroleumProduction: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    petroleumConsumption: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    coalProduction: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    coalConsumption: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    co2Emission: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                };

                // loop through all years, from 1980 to 2012
                for (var year = 1980; year <= 2012; year++) {
                    var value = record[year];

                    // deal with missing data points
                    if (value === '--') {
                        value = 0;
                    } else if (value === 'NA') {
                        value = 0;
                    } else if (value === '(s)') {
                        value = 0;
                    } else if (value === 'W') {
                        value = 0;
                    }

                    // add record of current energy production
                    locality.petroleumProduction[year-1980] = (value);
                }

                // add the current locality to an index
                localities[locality.name] = locality;
                listofLocalities.push(locality.name);
            }
            Papa.parse('data/coal_consumption.csv', {

                download: true,
                header: true,
                dynamicTyping: true,
                complete: function(production_results) {
                    for (var row = 0; row < production_results.data.length; row++) {
                        var record = production_results.data[row];
                        locality = localities[record.Locality];
                        // loop through all years, from 1980 to 2012
                        for (var year = 1980; year <= 2012; year++) {
                            var value = record[year];

                            // deal with missing data points
                            if (value === '--') {
                                value = 0;
                            } else if (value === 'NA') {
                                value = 0;
                            } else if (value === '(s)') {
                                value = 0;
                            } else if (value === 'W') {
                                value = 0;
                            }

                            // add record of current energy production
                            locality.coalConsumption[year-1980] = value;
                        }

                        // add the current locality to an index
                        localities[locality.name] = locality;
                    }
                    Papa.parse('data/coal_production.csv', {

                        download: true,
                        header: true,
                        dynamicTyping: true,
                        complete: function(production_results) {
                            for (var row = 0; row < production_results.data.length; row++) {
                                var record = production_results.data[row];
                                locality = localities[record.Locality];
                                // loop through all years, from 1980 to 2012
                                for (var year = 1980; year <= 2012; year++) {
                                    var value = record[year];

                                    // deal with missing data points
                                    if (value === '--') {
                                        value = 0;
                                    } else if (value === 'NA') {
                                        value = 0;
                                    } else if (value === '(s)') {
                                        value = 0;
                                    } else if (value === 'W') {
                                        value = 0;
                                    }

                                    // add record of current energy production
                                    locality.coalProduction[year-1980] = value;
                                }

                                // add the current locality to an index
                                localities[locality.name] = locality;
                            }
                            Papa.parse('data/petroleum_consumption.csv', {

                                download: true,
                                header: true,
                                dynamicTyping: true,
                                complete: function(production_results) {
                                    for (var row = 0; row < production_results.data.length; row++) {
                                        var record = production_results.data[row];
                                        locality = localities[record.Locality];
                                        // loop through all years, from 1980 to 2012
                                        for (var year = 1980; year <= 2012; year++) {
                                            var value = record[year];

                                            // deal with missing data points
                                            if (value === '--') {
                                                value = 0;
                                            } else if (value === 'NA') {
                                                value = 0;
                                            } else if (value === '(s)') {
                                                value = 0;
                                            } else if (value === 'W') {
                                                value = 0;
                                            }

                                            // add record of current energy production
                                            locality.petroleumConsumption[year-1980] = value;
                                        }

                                        // add the current locality to an index
                                        localities[locality.name] = locality;
                                    }
                                    Papa.parse('data/renewable_biofuel_consumption.csv', {

                                        download: true,
                                        header: true,
                                        dynamicTyping: true,
                                        complete: function(production_results) {
                                            for (var row = 0; row < production_results.data.length; row++) {
                                                var record = production_results.data[row];
                                                locality = localities[record.Locality];
                                                // loop through all years, from 1980 to 2012
                                                for (var year = 1980; year <= 2012; year++) {
                                                    var value = record[year];

                                                    // deal with missing data points
                                                    if (value === '--') {
                                                        value = 0;
                                                    } else if (value === 'NA') {
                                                        value = 0;
                                                    } else if (value === '(s)') {
                                                        value = 0;
                                                    } else if (value === 'W') {
                                                        value = 0;
                                                    }

                                                    // add record of current energy production
                                                    locality.renewableBiofuelConsumption[year-1980] = value;
                                                }

                                                // add the current locality to an index
                                                localities[locality.name] = locality;
                                            }
                                            Papa.parse('data/renewable_biofuel_production.csv', {

                                                download: true,
                                                header: true,
                                                dynamicTyping: true,
                                                complete: function(production_results) {
                                                    for (var row = 0; row < production_results.data.length; row++) {
                                                        var record = production_results.data[row];
                                                        locality = localities[record.Locality];
                                                        // loop through all years, from 1980 to 2012
                                                        for (var year = 1980; year <= 2012; year++) {
                                                            var value = record[year];

                                                            // deal with missing data points
                                                            if (value === '--') {
                                                                value = 0;
                                                            } else if (value === 'NA') {
                                                                value = 0;
                                                            } else if (value === '(s)') {
                                                                value = 0;
                                                            } else if (value === 'W') {
                                                                value = 0;
                                                            }

                                                            // add record of current energy production
                                                            locality.renewableBiofuelProduction[year-1980] = value;
                                                        }

                                                        // add the current locality to an index
                                                        localities[locality.name] = locality;
                                                    }
                                                    Papa.parse('data/renewable_electricity_consumption.csv', {

                                                        download: true,
                                                        header: true,
                                                        dynamicTyping: true,
                                                        complete: function(production_results) {
                                                            for (var row = 0; row < production_results.data.length; row++) {
                                                                var record = production_results.data[row];
                                                                locality = localities[record.Locality];
                                                                // loop through all years, from 1980 to 2012
                                                                for (var year = 1980; year <= 2012; year++) {
                                                                    var value = record[year];

                                                                    // deal with missing data points
                                                                    if (value === '--') {
                                                                        value = 0;
                                                                    } else if (value === 'NA') {
                                                                        value = 0;
                                                                    } else if (value === '(s)') {
                                                                        value = 0;
                                                                    } else if (value === 'W') {
                                                                        value = 0;
                                                                    }

                                                                    // add record of current energy production
                                                                    locality.renewableElectricityConsumption[year-1980] = value;
                                                                }

                                                                // add the current locality to an index
                                                                localities[locality.name] = locality;
                                                            }
                                                            Papa.parse('data/renewable_electricity_generation.csv', {

                                                                download: true,
                                                                header: true,
                                                                dynamicTyping: true,
                                                                complete: function(production_results) {
                                                                    for (var row = 0; row < production_results.data.length; row++) {
                                                                        var record = production_results.data[row];
                                                                        locality = localities[record.Locality];
                                                                        // loop through all years, from 1980 to 2012
                                                                        for (var year = 1980; year <= 2012; year++) {
                                                                            var value = record[year];

                                                                            // deal with missing data points
                                                                            if (value === '--') {
                                                                                value = 0;
                                                                            } else if (value === 'NA') {
                                                                                value = 0;
                                                                            } else if (value === '(s)') {
                                                                                value = 0;
                                                                            } else if (value === 'W') {
                                                                                value = 0;
                                                                            }

                                                                            // add record of current energy production
                                                                            locality.renewableElectricityProduction[year-1980] = value;
                                                                        }

                                                                        // add the current locality to an index
                                                                        localities[locality.name] = locality;
                                                                    }
                                                                    Papa.parse('data/total_electricity_consumption.csv', {

                                                                        download: true,
                                                                        header: true,
                                                                        dynamicTyping: true,
                                                                        complete: function(production_results) {
                                                                            for (var row = 0; row < production_results.data.length; row++) {
                                                                                var record = production_results.data[row];
                                                                                locality = localities[record.Locality];
                                                                                // loop through all years, from 1980 to 2012
                                                                                for (var year = 1980; year <= 2012; year++) {
                                                                                    var value = record[year];

                                                                                    // deal with missing data points
                                                                                    if (value === '--') {
                                                                                        value = 0;
                                                                                    } else if (value === 'NA') {
                                                                                        value = 0;
                                                                                    } else if (value === '(s)') {
                                                                                        value = 0;
                                                                                    } else if (value === 'W') {
                                                                                        value = 0;
                                                                                    }

                                                                                    // add record of current energy production
                                                                                    locality.totalElectricityConsumption[year-1980] = value;
                                                                                }

                                                                                // add the current locality to an index
                                                                                localities[locality.name] = locality;
                                                                            }
                                                                            Papa.parse('data/total_electricity_generation.csv', {

                                                                                download: true,
                                                                                header: true,
                                                                                dynamicTyping: true,
                                                                                complete: function(production_results) {
                                                                                    for (var row = 0; row < production_results.data.length; row++) {
                                                                                        var record = production_results.data[row];
                                                                                        locality = localities[record.Locality];
                                                                                        // loop through all years, from 1980 to 2012
                                                                                        for (var year = 1980; year <= 2012; year++) {
                                                                                            var value = record[year];

                                                                                            // deal with missing data points
                                                                                            if (value === '--') {
                                                                                                value = 0;
                                                                                            } else if (value === 'NA') {
                                                                                                value = 0;
                                                                                            } else if (value === '(s)') {
                                                                                                value = 0;
                                                                                            } else if (value === 'W') {
                                                                                                value = 0;
                                                                                            }

                                                                                            // add record of current energy production
                                                                                            locality.totalElectricityGeneration[year-1980] = value;
                                                                                        }

                                                                                        // add the current locality to an index
                                                                                        localities[locality.name] = locality;
                                                                                    }
                                                                                    Papa.parse('data/total_primary_energy_consumption.csv', {

                                                                                        download: true,
                                                                                        header: true,
                                                                                        dynamicTyping: true,
                                                                                        complete: function(production_results) {
                                                                                            for (var row = 0; row < production_results.data.length; row++) {
                                                                                                var record = production_results.data[row];
                                                                                                locality = localities[record.Locality];
                                                                                                // loop through all years, from 1980 to 2012
                                                                                                for (var year = 1980; year <= 2012; year++) {
                                                                                                    var value = record[year];

                                                                                                    // deal with missing data points
                                                                                                    if (value === '--') {
                                                                                                        value = 0;
                                                                                                    } else if (value === 'NA') {
                                                                                                        value = 0;
                                                                                                    } else if (value === '(s)') {
                                                                                                        value = 0;
                                                                                                    } else if (value === 'W') {
                                                                                                        value = 0;
                                                                                                    }

                                                                                                    // add record of current energy production
                                                                                                    locality.totalPrimaryConsumption[year-1980] = value;
                                                                                                }

                                                                                                // add the current locality to an index
                                                                                                localities[locality.name] = locality;
                                                                                            }
                                                                                            Papa.parse('data/total_primary_energy_production.csv', {

                                                                                                download: true,
                                                                                                header: true,
                                                                                                dynamicTyping: true,
                                                                                                complete: function(production_results) {
                                                                                                    for (var row = 0; row < production_results.data.length; row++) {
                                                                                                        var record = production_results.data[row];
                                                                                                        locality = localities[record.Locality];
                                                                                                        // loop through all years, from 1980 to 2012
                                                                                                        for (var year = 1980; year <= 2012; year++) {
                                                                                                            var value = record[year];

                                                                                                            // deal with missing data points
                                                                                                            if (value === '--') {
                                                                                                                value = 0;
                                                                                                            } else if (value === 'NA') {
                                                                                                                value = 0;
                                                                                                            } else if (value === '(s)') {
                                                                                                                value = 0;
                                                                                                            } else if (value === 'W') {
                                                                                                                value = 0;
                                                                                                            }

                                                                                                            // add record of current energy production
                                                                                                            locality.totalPrimaryProduction[year-1980] = value;
                                                                                                        }

                                                                                                        // add the current locality to an index
                                                                                                        localities[locality.name] = locality;
                                                                                                    }
                                                                                                    Papa.parse('data/co2_emissions_per_capita.csv', {

                                                                                                        download: true,
                                                                                                        header: true,
                                                                                                        dynamicTyping: true,
                                                                                                        complete: function(production_results) {
                                                                                                            for (var row = 0; row < production_results.data.length; row++) {
                                                                                                                var record = production_results.data[row];
                                                                                                                locality = localities[record.Locality];
                                                                                                                // loop through all years, from 1980 to 2012

                                                                                                                for (var year = 1980; year <= 2012; year++) {
                                                                                                                    var value = record[year];

                                                                                                                    // deal with missing data points
                                                                                                                    if (value === '--') {
                                                                                                                        value = 0;
                                                                                                                    } else if (value === 'NA') {
                                                                                                                        value = 0;
                                                                                                                    } else if (value === '(s)') {
                                                                                                                        value = 0;
                                                                                                                    } else if (value === 'W') {
                                                                                                                        value = 0;
                                                                                                                    }

                                                                                                                    // add record of current energy production

                                                                                                                        locality.co2Emission[year-1980] = value;
                                                                                                                }

                                                                                                                // add the current locality to an index
                                                                                                                localities[locality.name] = locality;
                                                                                                            }



                                                                                                            pageload(listofLocalities);
                                                                                                        }
                                                                                                    });
                                                                                                }
                                                                                            });
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});
