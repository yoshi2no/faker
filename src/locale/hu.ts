/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import hu from '../locales/hu';

/**
 * The faker instance for the `hu` locale.
 *
 * - Language: Hungarian
 * - Endonym: magyar
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `hu`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [hu, en, base],
});
