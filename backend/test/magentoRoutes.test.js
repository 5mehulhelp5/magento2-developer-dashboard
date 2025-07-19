/// <reference types="vitest" />

import { describe, it, beforeEach, vi, expect } from 'vitest';
import request from 'supertest';
import app from './testApp.js';
import Magento from '../models/magentoModel.js';

// Mock this model
vi.mock('../models/magentoModel.js');

describe('Magento API routes', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('GET /magento - should return all magentos', async () => {
        const mockData = [{ id: 1, name: 'Test Store', url: 'https://test.com', access_token: 'abc123' }];
        Magento.findAll.mockResolvedValue(mockData);

        const res = await request(app).get('/magento');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockData);
        expect(Magento.findAll).toHaveBeenCalledTimes(1);
    });
});