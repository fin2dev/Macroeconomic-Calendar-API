# Macroeconomic Calendar API (Economic Calendar API)

[Macroeconomic Calendar API](https://fin2dev.com/macroeconomic-calendar-api/) provides real-time and historical economic calendar data in JSON format for developers, trading platforms, analytics tools and financial applications.

Access economic events including inflation reports, interest rate decisions, employment data, GDP releases, PMI, retail sales, consumer confidence and other important macroeconomic indicators.

## Key Features

* Real-time economic calendar data
* Historical economic events
* Coverage for 50+ countries and regions
* Actual, previous and consensus values
* Event impact levels
* Country and ISO country codes
* Simple JSON REST API
* Specific date and date range filtering

## Supported Economic Events

The API provides access to a wide range of economic events and macroeconomic indicators.

| Category          | Examples                                            |
| ----------------- | --------------------------------------------------- |
| Inflation         | CPI, Core CPI, PPI, PCE Price Index                 |
| Interest Rates    | Central Bank Interest Rate Decisions                |
| Employment        | Nonfarm Payrolls, Unemployment Rate, Jobless Claims |
| Economic Growth   | GDP, Industrial Production                          |
| Business Activity | Manufacturing PMI, Services PMI                     |
| Consumer Activity | Retail Sales, Consumer Confidence                   |
| Housing           | Building Permits, New Home Sales, Mortgage Data     |
| Energy            | Crude Oil Stocks, Natural Gas Stocks                |
| Central Banks     | Fed Speeches, Central Bank Events                   |

Economic calendar data is available for more than 50 countries and regions, including the United States, Euro Area, United Kingdom, Germany, Japan, Canada and Australia.

## Endpoint

```text
https://apidata.fin2dev.com/v1/macrocalendar
```

## Parameters

| Parameter             | Type   | Description                                                       |
| --------------------- | ------ | ----------------------------------------------------------------- |
| `key` *               | string | Your API key                                                      |
| `country` **          | string | Country or region used to filter economic events                  |
| `iso_country_code` ** | string | ISO country code used to filter economic events, for example `us` |
| `date`                | date   | Retrieve economic events for a specific date                      |
| `date_from`           | date   | Start date for the requested period                               |
| `date_to`             | date   | End date for the requested period                                 |

**\*** Required parameter

**\*\*** Use either `country` or `iso_country_code` to select a country or region.

Use `date` to retrieve events for a specific day, or `date_from` and `date_to` to retrieve events for a date range.

The maximum interval between `date_from` and `date_to` is 90 days.

You can also filter calendar events using the `iso_country_code` parameter.

## Example Request

Using the country name:

```text
https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&country=United_States
```

Using the ISO country code:

```text
https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&iso_country_code=us
```

## Example Response

```json
{
  "result": {
    "output": [
      {
        "datetime": "2026-08-26 12:30:00",
        "iso_country_code": "US",
        "country": "United States",
        "report_name": "Core PCE Price Index MoM",
        "report_date": "07",
        "actual": "",
        "previous": "0.1",
        "consensus": "0.2",
        "unit": "percent",
        "impact": "1"
      },
      {
        "datetime": "2026-08-26 12:30:00",
        "iso_country_code": "US",
        "country": "United States",
        "report_name": "GDP Growth Rate QoQ 2nd Est",
        "report_date": "Q2",
        "actual": "",
        "previous": "2.1",
        "consensus": "1.5",
        "unit": "percent",
        "impact": "1"
      }
    ]
  }
}
```
## Live Demo

Try the Macroeconomic Calendar API directly in your browser.

🚀 [Try Macroeconomic Calendar API Demo](https://fin2dev.github.io/Macroeconomic-Calendar-API/live-demo/)

Enter your API key, select a country and optionally specify a date or date range to view the JSON response.

## Specific Date Example

Use the `date` parameter to retrieve economic calendar events for a specific date.

**Using country name:**

```text
https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&country=United_States&date=2026-08-24
```

**Using ISO country code:**

```text
https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&iso_country_code=us&date=2026-08-24
```

**Example Response**

```json
{
  "result": {
    "output": [
      {
        "datetime": "2026-08-24 12:30:00",
        "iso_country_code": "US",
        "country": "United States",
        "report_name": "Chicago Fed National Activity Index",
        "report_date": "07",
        "actual": "",
        "previous": "-0.02",
        "consensus": "",
        "unit": "",
        "impact": "2"
      },
      {
        "datetime": "2026-08-24 15:30:00",
        "iso_country_code": "US",
        "country": "United States",
        "report_name": "3-Month Bill Auction",
        "report_date": "",
        "actual": "",
        "previous": "3.715",
        "consensus": "",
        "unit": "percent",
        "impact": "3"
      },
      {
        "datetime": "2026-08-24 15:30:00",
        "iso_country_code": "US",
        "country": "United States",
        "report_name": "6-Month Bill Auction",
        "report_date": "",
        "actual": "",
        "previous": "3.780",
        "consensus": "",
        "unit": "percent",
        "impact": "3"
      }
    ]
  }
}
```

## Date Range Example

Use `date_from` and `date_to` to retrieve economic calendar events for a specific period.

**Example Request**

```text
https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&country=United_States&date_from=2026-08-24&date_to=2026-08-28
```

The same request can also be made using `iso_country_code`:

```text
https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&iso_country_code=us&date_from=2026-08-24&date_to=2026-08-28
```

A single request can retrieve a date range of up to 90 days.

## Response Fields

| Field              | Description                                   |
| ------------------ | --------------------------------------------- |
| `datetime`         | Scheduled date and time of the economic event |
| `iso_country_code` | ISO country code                              |
| `country`          | Country or region                             |
| `report_name`      | Name of the economic event or indicator       |
| `report_date`      | Reporting period                              |
| `actual`           | Actual released value                         |
| `previous`         | Previous value                                |
| `consensus`        | Market consensus value                        |
| `unit`             | Unit of measurement                           |
| `impact`           | Event impact level                            |

## Code Examples

<details>
<summary>Python Example</summary>

```python
import requests

url = "https://apidata.fin2dev.com/v1/macrocalendar"

params = {
    "key": "YOUR_API_KEY",
    "country": "United_States"
}

response = requests.get(url, params=params)

print(response.json())
```

</details>

<details>
<summary>PHP Example</summary>

```php
<?php

$url = 'https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&country=United_States';

$response = file_get_contents($url);

echo $response;

?>
```

</details>

<details>
<summary>JavaScript Example</summary>

```javascript
fetch(
  'https://apidata.fin2dev.com/v1/macrocalendar?key=YOUR_API_KEY&country=United_States'
)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

</details>

## Supported Countries

Use the following endpoint to retrieve the list of countries and regions supported by the Macroeconomic Calendar API.

```text
https://apidata.fin2dev.com/v1/macrolist?key=YOUR_API_KEY&list=country
```

The returned country names can be used with the `country` parameter in Macroeconomic Calendar API requests.

## Use Cases

The Macroeconomic Calendar API can be used for:

* Trading platforms
* Financial dashboards
* Economic calendar applications
* Market analysis tools
* Algorithmic trading systems
* Economic research
* Financial data pipelines
* Automated monitoring of economic releases

---

## Getting Started

Get your API key and start using the Macroeconomic Calendar API.

🔑 [Get API Access](https://fin2dev.com/pricing/)

📚 [View API Documentation](https://fin2dev.com/documentation/#macrocalendar)

---

## Contact

If you have any questions about the API, pricing, data coverage or integration, feel free to contact us.

🌐 [Fin2Dev Website](https://fin2dev.com/)

📧 [Contact Fin2Dev](https://fin2dev.com/contact/)

🐙 [Fin2Dev on GitHub](https://github.com/fin2dev)

---

## Why Fin2Dev

* Simple JSON APIs
* Real-time and historical economic data
* Economic calendar coverage for 50+ countries and regions
* Developer-friendly integration
* Fast onboarding
* Transparent pricing
