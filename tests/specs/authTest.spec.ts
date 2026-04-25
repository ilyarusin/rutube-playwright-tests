import { test, expect } from '@playwright/test';
import path from 'path';
import {chromium} from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());
