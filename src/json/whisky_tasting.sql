WITH tasting_json AS
(SELECT
    tasting.id AS id,
    tasting.brand AS brand,
    tasting.brand AS name,
    tasting.strength AS strength,
    country.label AS country,
    region.label AS region,
    type.label AS type,
    '' AS cask_type,
    tasting.date_of_tasting,
    tasting.tasting_location AS location,
    tasting.tasting_flavours AS flavour,
    finish.label AS finish,
    tasting.tasting_notes AS notes,
    tasting.tasting_rating AS rating,
    tasting.distillery_id,
    tasting.tasting_would_buy
FROM tasting
    LEFT JOIN country ON tasting.country_id = country.id
    LEFT JOIN region ON tasting.region_id = region.id
    LEFT JOIN type ON tasting.type_id = type.id
    LEFT JOIN finish ON tasting.tasting_finish_id = finish.id ORDER BY tasting.id ASC)
SELECT JSON_AGG(tasting_json.*)
FROM tasting_json;
