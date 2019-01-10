exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("species")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("species").insert([
        { species_name: "Star-nosed Mole" },
        { species_name: "Platypus" },
        { species_name: "Chameleon" },
        { species_name: "Snail" },
        { species_name: "Blue-footed Booby" },
        { species_name: "Anteater" },
        { species_name: "Minotaur" },
        { species_name: "Raccoon" }
      ]);
    });
};
