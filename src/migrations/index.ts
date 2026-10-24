import * as migration_20261021_141446 from './20261021_141446';
import * as migration_20261022_130756 from './20261022_130756';
import * as migration_20261022_153000_numeric_prices from './20261022_153000_numeric_prices';
import * as migration_20261023_120000_schedule_entries from './20261023_120000_schedule_entries';

export const migrations = [
  {
    up: migration_20261021_141446.up,
    down: migration_20261021_141446.down,
    name: '20261021_141446',
  },
  {
    up: migration_20261022_130756.up,
    down: migration_20261022_130756.down,
    name: '20261022_130756'
  },
  {
    up: migration_20261022_153000_numeric_prices.up,
    down: migration_20261022_153000_numeric_prices.down,
    name: '20261022_153000_numeric_prices',
  },
  {
    up: migration_20261023_120000_schedule_entries.up,
    down: migration_20261023_120000_schedule_entries.down,
    name: '20261023_120000_schedule_entries',
  },
];
