import hello from './hello';

const commands: CommandModule[] = [ hello ];

export default commands.map((command) => ({
  ...command, identifier: `initiate.${command.identifier}`,
}));
