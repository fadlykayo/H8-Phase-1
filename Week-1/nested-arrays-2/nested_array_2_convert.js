var roster = [
    ["Number", "Name", "Position", "Points per Game"],
    ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
    ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
    ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
    ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
    ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
];

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format(roster) {
  // your convert code here
  var arrRoster = [];

  var data = function (age, name, pos, point) {
      this.Number = age;
      this.Name = name;
      this.Position = pos;
      this.Points = point;
  }

  for (let i = 1; i < roster.length; i++) {
    var person1 = new data (roster[i][0], roster[i][1], roster[i][2], roster[i][3]);
    arrRoster.push(person1);
  }
  return arrRoster;
}

var object_roster = convert_roster_format(roster)
console.log(object_roster)

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard",
// "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]["Name"]) // outputs true
