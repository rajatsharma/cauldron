import hello from './hello';

const commands: CommandModule[] = [ hello ];

export default commands.map((command) => ({
  ...command, identifier: `cauldron.${command.identifier}`,
}));
