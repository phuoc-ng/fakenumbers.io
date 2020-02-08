/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

import Layout from './Layout';

const LicensePage = () => {
    return (
        <Layout>
            <h1 className='font-bold text-4xl my-16 text-center'>
                Licensing agreement
            </h1>
            <p>By purchasing resource ("item" or "file") you are being granted a license to use these files for specific uses under certain conditions.</p>
            <ul className='list-inside list-decimal'>
                <li className='py-2'>Nguyen Huu Phuoc's license grants the user an ongoing, non-exclusive, worldwide license to utilize the digital work ("Item").</li>
                <li className='py-2'>You are licensed to use the Item to create unlimited End Products for yourself or for your clients and the End Product may be sold, licensed, sub-licensed or freely distributed.</li>
                <li className='py-2'>If you're a part of a company, organization or any other enterprise of any size you must purchase Organization License.
The product purchased under Organization License can be used by any number of the company's employees. This license is suitable
for all the corporate and commercial organizations and business entities. In case of purchasing one of our the products
for your company, you must choose Organization License.</li>
            </ul>

            <h2 className='text-3xl mt-8'>An End Product is one of the following:</h2>
            <ul className='list-inside list-decimal'>
                <li className='py-2'>For an Item that is a template, the End Product is a customized implementation of the Item. For example, the
item is UI templates and the End Product is the finished web site.</li>
                <li className='py-2'>For other types of Items, an End Product is something that incorporates the Item as well as other things, so that it is
larger in scope and different in nature than the Item. For example, the Item is a set of icons and the End Product is a
mobile app for sale.</li>
            </ul>

            <h2 className='text-3xl mt-8'>You are allowed to:</h2>
            <ul className='list-inside list-decimal'>
                <li className='py-2'>You may create an End Product for a client.</li>
                <li className='py-2'>You may sell, license, sub-license or distributed and make any number of copies of the End Product.</li>
                <li className='py-2'>You may modify or manipulate the Item. You may combine the Item with other works and make a derivative work from it.
The resulting works are subject to the terms of this license.</li>
                <li className='py-2'>This is a "multi-use" license, which means you may use an Item multiple times, in multiple projects.</li>
            </ul>

            <h2 className='text-3xl mt-8'>You are NOT allowed to:</h2>
            <ul className='list-inside list-decimal'>
                <li className='py-2'>You can't re-distribute the Item as stock, in a tool or template, or with source files. You can't do this with an Item
either on its own or bundled with other items, and even if you modify the Item.</li>
                <li className='py-2'>You can't re-distribute or make available the Item as-is or with superficial modifications.</li>
                <li className='py-2'>You must not permit an end user of the End Product to extract the Item and use it separately from the End Product.</li>
                <li className='py-2'>The End Product can't be used in a product offered for sale where the item contributes to the core value of the product
being sold. For example, convert a purchased product to a template or theme for sale on your website or marketplaces
like ThemeForest, Creative Market, etc.</li>
            </ul>

            <h2 className='text-3xl mt-8'>Other license terms:</h2>
            <ul className='list-inside list-decimal'>
                <li className='py-2'>You are not required to attribute or link to any of my products in any of projects.</li>
                <li className='py-2'>Any of my products will not be responsible for any outcome that may occur during the course of usage of any of my resources.</li>
            </ul>
        </Layout>
    );
};

export default LicensePage;
