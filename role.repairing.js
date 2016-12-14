var roleRepairer = 
{ run: function(creep) 
{ if (creep.memory.repairing && creep.carry.energy == 0) 
{ creep.memory.repairing = false; creep.say('harvesting'); } 
if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) 
{ creep.memory.repairing = true; creep.say('repairing'); 
    
}
        if (creep.memory.repairing) {
            // Repairing
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (targets) => targets.hits < targets.hitsMax
            });

            if (targets.length) {
                if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
                            else {
                creep.moveTo(16, 42);
                creep.say('zzZZZzzzZZ');
                }
            } 

        } else {
            // Harvesting
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) 
                {
                creep.moveTo(sources[1]);
                }

        }
    }
}

module.exports = roleRepairer;