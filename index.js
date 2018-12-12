function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function compareRevenue(a,b) {
  if (a.revenue < b.revenue)
     return -1;
  if (a.revenue > b.revenue)
    return 1;
  return 0;
}

function driversByRevenue(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort(compareRevenue)
}

function driversByName(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(accumulator, driver) {
    return accumulator + driver.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers) / drivers.length)
}
