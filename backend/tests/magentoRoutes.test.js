import {describe, it, beforeEach, vi, expect} from 'vitest';
import request from 'supertest';
import app from './testApp.js';
import Magento from '../models/magentoModel.js';

// Mock this model
vi.mock('../models/magentoModel.js', () => {
    return {
        default: {
            findAll: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
            findByPk: vi.fn()
        }
    }
});

describe('Magento API routes', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('GET /magento - should return all magentos', async () => {
        const mockData = [{id: 1, name: 'Test Store', url: 'https://test.com', access_token: 'abc123'}];
        Magento.findAll.mockResolvedValue(mockData);

        const res = await request(app).get('/magento');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockData);
        expect(Magento.findAll).toHaveBeenCalledTimes(1);
    });

    it('POST /magento - should create a new magento record', async () => {
        const inputData = {name: 'New Store', url: 'https://new.com', access_token: 'token123'};
        const createdRecord = {id: 2, ...inputData};

        Magento.create.mockResolvedValue(createdRecord);

        const res = await request(app).post('/magento').send(inputData);

        expect(res.status).toBe(201); // assuming your controller returns 201
        expect(res.body).toEqual(createdRecord);
        expect(Magento.create).toHaveBeenCalledWith(inputData);
    });

    it('PUT /magento/:id - should update a magento record', async () => {
        const id = 2;
        const updateData = {
            name: 'Updated Store',
            url: 'https://updated.com',
            access_token: 'updatedtoken'
        };

        const mockInstance = {
            id,
            ...updateData,
            update: vi.fn().mockResolvedValue(undefined)
        };

        Magento.findByPk.mockResolvedValue(mockInstance);

        const res = await request(app).put(`/magento/${id}`).send(updateData);

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ id, ...updateData });
        expect(Magento.findByPk).toHaveBeenCalledWith(String(id));
        expect(mockInstance.update).toHaveBeenCalledWith(updateData); // ✅ Correct assertion
    });

});