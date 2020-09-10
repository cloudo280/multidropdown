export const menuData = {
  level_name: "site",
  entries: [{
    id: 1,
    name: "Casablanka",
    entries: [{
      id: 1,
      name: "Zone 1",
      type: "zone",
      entries: [{
          id: 1,
          name: "Thanos",
          type: "building",
          entries: [{id: 1,
                    name: "Floor no. 5",
                    type: "floor",
                    entries: [{
                      id: 1,
                      name: "Room 2",
                      type: "room"
                    }]
                  }]  
      }]
      },
      {
      id: 2,
      name: "Zone 2",
      type: "zone",
      entries: [{
          id: 2,
          name: "Doctor Strange",
          type: "building"
        }]
      }]
  }, {
      id: 1,
      name: "Infinity",
      entries: [{
        id: 1,
        name: "Z1",
        type: "zone",
        entries: [{
          id: 1,
          name: "Build 1",
          type: "building"
        }]
      }
      ]
    }]
}