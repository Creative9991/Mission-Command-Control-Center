// One-off data fix: every agency's `centers`, `spacecrafts`, and `satelittes`
// fields had the exact same ISRO placeholder data copy-pasted onto them (e.g.
// ROSCOSMOS was showing "Satish Dawan Space Center" and "PSLV/GSLV" as both
// its launch vehicles AND its satellites). Even ISRO's own `satelittes` field
// had this mixup -- it listed ISRO's launch vehicles again instead of actual
// ISRO satellites. This replaces those fields with real, agency-specific
// data while leaving `agency` and `launchers` on each record untouched.
// (`launchers` has the same placeholder-copy bug too, but isn't rendered
// anywhere in the UI yet, so it's left alone for now.)
//
// Safe to re-run -- idempotent.
// Run: node fix-agency-mission-data.js
const { getSpaceAgenciesData, addOrUpdateAgencies } = require("./dynamodb");

const FIXES = {
  spacex: {
    // centers and satelittes were already correct (real launch sites + real
    // Starlink satellites) -- only spacecrafts was the ISRO placeholder
    spacecrafts: [
      { id: 1, year: 2006, spacecraftName: "Falcon 1" },
      { id: 2, year: 2010, spacecraftName: "Falcon 9" },
      { id: 3, year: 2018, spacecraftName: "Falcon Heavy" },
      { id: 4, year: 2019, spacecraftName: "Cargo Dragon 2" },
      { id: 5, year: 2023, spacecraftName: "Starship" },
    ],
  },
  nasa: {
    // spacecrafts were already correct -- centers and satelittes were the ISRO
    // placeholder (satelittes had even duplicated the *programs* list, not
    // satellites at all). Also fixing a typo ("Appllo Program" -> "Apollo
    // Program") while touching this record.
    centers: [
      { id: 1, spaceCenter: "Kennedy Space Center", place: "Merritt Island, Florida, United States" },
      { id: 2, spaceCenter: "Johnson Space Center", place: "Houston, Texas, United States" },
    ],
    satelittes: [
      { id: 1, year: 1977, spacecraftName: "Voyager 1" },
      { id: 2, year: 1990, spacecraftName: "Hubble Space Telescope" },
      { id: 3, year: 1972, spacecraftName: "Landsat 1" },
      { id: 4, year: 2021, spacecraftName: "James Webb Space Telescope" },
    ],
    fixSpacecraftTypo: true,
  },
  isro: {
    // centers and spacecrafts were already correct (this WAS the real ISRO
    // data everyone else got copy-pasted from) -- but satelittes duplicated
    // the launch-vehicle list instead of listing actual ISRO satellites.
    satelittes: [
      { id: 1, year: 1975, spacecraftName: "Aryabhata" },
      { id: 2, year: 1988, spacecraftName: "INSAT-1C" },
      { id: 3, year: 2008, spacecraftName: "Chandrayaan-1" },
      { id: 4, year: 2013, spacecraftName: "Mars Orbiter Mission (Mangalyaan)" },
      { id: 5, year: 2023, spacecraftName: "Chandrayaan-3" },
    ],
  },
  virgingalactic: {
    centers: [
      { id: 1, spaceCenter: "Mojave Air and Space Port", place: "Mojave, California, United States" },
      { id: 2, spaceCenter: "Spaceport America", place: "Sierra County, New Mexico, United States" },
    ],
    spacecrafts: [
      { id: 1, year: 2008, spacecraftName: "WhiteKnightTwo (VMS Eve)" },
      { id: 2, year: 2010, spacecraftName: "VSS Enterprise" },
      { id: 3, year: 2016, spacecraftName: "VSS Unity" },
      { id: 4, year: 2021, spacecraftName: "VSS Imagine" },
    ],
    // Virgin Galactic is suborbital space tourism, not a satellite operator --
    // its closest equivalent is its crewed spaceflight missions.
    satelittes: [
      { id: 1, year: 2021, spacecraftName: "Unity 22 (first fully crewed spaceflight)" },
      { id: 2, year: 2023, spacecraftName: "Galactic 01 (first commercial spaceflight)" },
      { id: 3, year: 2023, spacecraftName: "Galactic 02" },
      { id: 4, year: 2024, spacecraftName: "Galactic 07" },
    ],
  },
  blueorigin: {
    centers: [
      { id: 1, spaceCenter: "Blue Origin Launch Site One", place: "Van Horn, Texas, United States" },
      { id: 2, spaceCenter: "Cape Canaveral Space Launch Complex 36", place: "Cape Canaveral, Florida, United States" },
    ],
    spacecrafts: [
      { id: 1, year: 2015, spacecraftName: "New Shepard" },
      { id: 2, year: 2025, spacecraftName: "New Glenn" },
    ],
    satelittes: [
      { id: 1, year: 2021, spacecraftName: "NS-16 (first crewed New Shepard flight)" },
      { id: 2, year: 2025, spacecraftName: "Blue Ring Pathfinder (maiden New Glenn payload)" },
      { id: 3, year: 2025, spacecraftName: "ESCAPADE (NASA Mars mission, New Glenn)" },
    ],
  },
  roscosmos: {
    centers: [
      { id: 1, spaceCenter: "Baikonur Cosmodrome", place: "Baikonur, Kazakhstan" },
      { id: 2, spaceCenter: "Vostochny Cosmodrome", place: "Amur Oblast, Russia" },
    ],
    spacecrafts: [
      { id: 1, year: 1966, spacecraftName: "Soyuz" },
      { id: 2, year: 1965, spacecraftName: "Proton" },
      { id: 3, year: 2014, spacecraftName: "Angara" },
    ],
    satelittes: [
      { id: 1, year: 1982, spacecraftName: "GLONASS (satellite navigation)" },
      { id: 2, year: 1978, spacecraftName: "Progress (cargo resupply)" },
      { id: 3, year: 2020, spacecraftName: "Soyuz MS (crewed spacecraft)" },
      { id: 4, year: 2023, spacecraftName: "Luna-25" },
    ],
  },
  esa: {
    centers: [
      { id: 1, spaceCenter: "Guiana Space Centre — ELA-3 (Ariane)", place: "Kourou, French Guiana" },
      { id: 2, spaceCenter: "Guiana Space Centre — ZLV (Vega)", place: "Kourou, French Guiana" },
    ],
    spacecrafts: [
      { id: 1, year: 1996, spacecraftName: "Ariane 5" },
      { id: 2, year: 2012, spacecraftName: "Vega" },
      { id: 3, year: 2024, spacecraftName: "Ariane 6" },
    ],
    satelittes: [
      { id: 1, year: 2004, spacecraftName: "Rosetta" },
      { id: 2, year: 2013, spacecraftName: "Gaia" },
      { id: 3, year: 2014, spacecraftName: "Sentinel-1 (Copernicus)" },
      { id: 4, year: 2023, spacecraftName: "JUICE (Jupiter Icy Moons Explorer)" },
    ],
  },
  boeing: {
    centers: [
      { id: 1, spaceCenter: "Cape Canaveral Space Launch Complex 41", place: "Cape Canaveral, Florida, United States" },
      { id: 2, spaceCenter: "Kennedy Space Center", place: "Merritt Island, Florida, United States" },
    ],
    spacecrafts: [
      { id: 1, year: 1967, spacecraftName: "Saturn V (S-IC first stage, prime contractor)" },
      { id: 2, year: 2002, spacecraftName: "Delta IV (developed by Boeing)" },
      { id: 3, year: 2019, spacecraftName: "CST-100 Starliner" },
    ],
    satelittes: [
      { id: 1, year: 1978, spacecraftName: "GPS Block I" },
      { id: 2, year: 1983, spacecraftName: "TDRS (Tracking and Data Relay Satellite)" },
      { id: 3, year: 1994, spacecraftName: "Milstar" },
      { id: 4, year: 2018, spacecraftName: "GPS III" },
    ],
  },
  cnsa: {
    centers: [
      { id: 1, spaceCenter: "Jiuquan Satellite Launch Center", place: "Inner Mongolia, China" },
      { id: 2, spaceCenter: "Wenchang Spacecraft Launch Site", place: "Hainan, China" },
    ],
    spacecrafts: [
      { id: 1, year: 1999, spacecraftName: "Long March 2F" },
      { id: 2, year: 2016, spacecraftName: "Long March 5" },
    ],
    satelittes: [
      { id: 1, year: 2007, spacecraftName: "Chang'e 1 (lunar probe)" },
      { id: 2, year: 2000, spacecraftName: "BeiDou (satellite navigation)" },
      { id: 3, year: 2020, spacecraftName: "Tianwen-1 (Mars mission)" },
      { id: 4, year: 2021, spacecraftName: "Tiangong space station core module" },
    ],
  },
  jaxa: {
    centers: [
      { id: 1, spaceCenter: "Tanegashima Space Center", place: "Kagoshima, Japan" },
      { id: 2, spaceCenter: "Uchinoura Space Center", place: "Kagoshima, Japan" },
    ],
    spacecrafts: [
      { id: 1, year: 1994, spacecraftName: "H-II" },
      { id: 2, year: 2013, spacecraftName: "Epsilon" },
      { id: 3, year: 2023, spacecraftName: "H3" },
    ],
    satelittes: [
      { id: 1, year: 2010, spacecraftName: "Akatsuki (Venus orbiter)" },
      { id: 2, year: 2014, spacecraftName: "Hayabusa2 (asteroid sample return)" },
      { id: 3, year: 2009, spacecraftName: "Kibo (ISS module)" },
      { id: 4, year: 2015, spacecraftName: "Himawari-8 (weather satellite)" },
    ],
  },
};

const applyFixes = async () => {
  const { Items } = await getSpaceAgenciesData();

  for (const item of Items) {
    const fix = FIXES[item.agency];
    if (!fix) continue; // e.g. the stray "posts" record -- leave untouched

    const updated = { ...item };
    if (fix.centers) updated.centers = fix.centers;
    if (fix.spacecrafts) updated.spacecrafts = fix.spacecrafts;
    if (fix.satelittes) updated.satelittes = fix.satelittes;
    if (fix.fixSpacecraftTypo) {
      const fixTypo = (s) =>
        s.spacecraftName === "Appllo Program" ? { ...s, spacecraftName: "Apollo Program" } : s;
      if (updated.spacecrafts) updated.spacecrafts = updated.spacecrafts.map(fixTypo);
      if (updated.satelittes) updated.satelittes = updated.satelittes.map(fixTypo);
    }

    if (!fix.centers && !fix.spacecrafts && !fix.satelittes && !fix.fixSpacecraftTypo) {
      console.log(`skip  ${item.agency} — already correct`);
      continue;
    }

    await addOrUpdateAgencies(updated);
    console.log(`fixed ${item.agency}`);
  }
};

applyFixes()
  .then(() => console.log("done"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
