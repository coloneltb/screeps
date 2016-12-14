var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairing');
var roleMiner = require('role.miner');
var buildingTower = require('building.tower');
var roletowerloader = require('role.towerloader');


module.exports.loop = function () {
 buildingTower.tick()
 
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }





    var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    var miner = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    var towerloader = _.filter(Game.creeps, (creep) => creep.memory.role == 'towerloader');
    console.log('builder: ' + builder.length);
    console.log('upgrader: ' + upgrader.length);
    console.log('repairer: ' + repairer.length);
    console.log('miner: ' + miner.length);
    console.log('towerloader: ' + towerloader.length);
    
    

    if(towerloader.length < 1) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'towerloader'});
        console.log('Spawning new towerloader: ' + newName);
    }
    if(upgrader.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }
    if(builder.length < 1) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }
    if(repairer.length < 1) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE], undefined, {role: 'repairer'});
        console.log('Spawning new repairer: ' + newName);
    }
        if(miner.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], undefined, {role: 'miner'});
        console.log('Spawning new miner: ' + newName);
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'towerloader') 
        {
            roletowerloader.run(creep);
        }
        
    }
}
