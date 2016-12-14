var roleHarvester = 
{
run: function(creep) 
    {
    if(creep.carry.energy < creep.carryCapacity) 
        {
        var sources = creep.room.find(FIND_SOURCES);
        if(!creep.memory.source)
            {
            var sources = creep.room.find(FIND_SOURCES);
            var check=[];
            sources.forEach(function(srs)
                {
                var tmp = creep.room.find(FIND_MY_CREEPS, {filter: (s) => s.memory.source == srs.id})
                if(tmp == '' || tmp.length == 1)
                    {
                    creep.memory.source = srs.id;
                    }
                });
            }
        var source = creep.pos.findClosestByPath(FIND_SOURCES,{filter: (s) => s.id == creep.memory.source});
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) 
            {
            creep.moveTo(source);
            creep.say('harvesting');
            return true;
            }
        }
    else
        {
        var targets = creep.room.find(FIND_STRUCTURES, 
            {
            filter: (structure) => 
                {
                return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                structure.energy < structure.energyCapacity;
                }
            });
        if(targets.length > 0) 
            {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
                {
                creep.moveTo(targets[0]);
                }

        }
    }
}
}
module.exports = roleHarvester;