#!/usr/bin/env node
import { program } from 'commander';

program
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f --format <type>', 'output format')
  .description(`Compares two configuration files and shows a difference.`)
  .parse();