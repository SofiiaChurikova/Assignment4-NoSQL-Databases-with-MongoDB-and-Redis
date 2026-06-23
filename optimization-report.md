Before Index:

```json
[
{
"$clusterTime": {
"clusterTime": {"$timestamp": {"t": 1782210502, "i": 1}},
"signature": {
"hash": {"$binary": {"base64": "eFpW2I2WQiFdDOc2+q2IfTM7pqM=", "subType": "00"}},
"keyId": 7619114555372732417
}
},
"command": {
"find": "books",
"filter": {
"category": "Programming",
"published_year": {
"$gte": 2020
}
},
"$db": "test"
},
"executionStats": {
"executionSuccess": true,
"nReturned": 4,
"executionTimeMillis": 0,
"totalKeysExamined": 0,
"totalDocsExamined": 33,
"executionStages": {
"isCached": false,
"stage": "COLLSCAN",
"filter": {
"$and": [
{
"category": {
"$eq": "Programming"
}
},
{
"published_year": {
"$gte": 2020
}
}
]
},
"nReturned": 4,
"executionTimeMillisEstimate": 0,
"works": 34,
"advanced": 4,
"needTime": 29,
"needYield": 0,
"saveState": 0,
"restoreState": 0,
"isEOF": 1,
"direction": "forward",
"docsExamined": 33
}
},
"explainVersion": "1",
"ok": 1,
"operationTime": {"$timestamp": {"t": 1782210502, "i": 1}},
"queryPlanner": {
"namespace": "test.books",
"parsedQuery": {
"$and": [
{
"category": {
"$eq": "Programming"
}
},
{
"published_year": {
"$gte": 2020
}
}
]
},
"indexFilterSet": false,
"queryHash": "92EDD004",
"planCacheShapeHash": "92EDD004",
"planCacheKey": "195A970C",
"optimizationTimeMillis": 0,
"maxIndexedOrSolutionsReached": false,
"maxIndexedAndSolutionsReached": false,
"maxScansToExplodeReached": false,
"prunedSimilarIndexes": false,
"winningPlan": {
"isCached": false,
"stage": "COLLSCAN",
"filter": {
"$and": [
{
"category": {
"$eq": "Programming"
}
},
{
"published_year": {
"$gte": 2020
}
}
]
},
"direction": "forward"
},
"rejectedPlans": []
},
"queryShapeHash": "AA3078A59481B28A38775FA280FC4779BEA0E8E900AF63A4344B76A85859C985",
"serverInfo": {
"host": "ac-8kf2wgk-shard-00-01.okhogvl.mongodb.net",
"port": 27017,
"version": "8.0.26",
"gitVersion": "a2c24805265db119cc39f2f54e067b4294a4ddd2"
},
"serverParameters": {
"internalQueryFacetBufferSizeBytes": 104857600,
"internalQueryFacetMaxOutputDocSizeBytes": 104857600,
"internalLookupStageIntermediateDocumentMaxSizeBytes": 16793600,
"internalDocumentSourceGroupMaxMemoryBytes": 104857600,
"internalQueryMaxBlockingSortMemoryUsageBytes": 33554432,
"internalQueryProhibitBlockingMergeOnMongoS": 0,
"internalQueryMaxAddToSetBytes": 104857600,
"internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600,
"internalQueryFrameworkControl": "trySbeRestricted",
"internalQueryPlannerIgnoreIndexWithCollationForRegex": 1
}
}
]
```

After Index:

```json
[
{
"$clusterTime": {
"clusterTime": {"$timestamp": {"t": 1782210552, "i": 2}},
"signature": {
"hash": {"$binary": {"base64": "StWrHBcnmOKOJqTsgwZ9ztkcURU=", "subType": "00"}},
"keyId": 7619114555372732417
}
},
"command": {
"find": "books",
"filter": {
"category": "Programming",
"published_year": {
"$gte": 2020
}
},
"$db": "test"
},
"executionStats": {
"executionSuccess": true,
"nReturned": 4,
"executionTimeMillis": 1,
"totalKeysExamined": 4,
"totalDocsExamined": 4,
"executionStages": {
"isCached": false,
"stage": "FETCH",
"nReturned": 4,
"executionTimeMillisEstimate": 0,
"works": 5,
"advanced": 4,
"needTime": 0,
"needYield": 0,
"saveState": 0,
"restoreState": 0,
"isEOF": 1,
"docsExamined": 4,
"alreadyHasObj": 0,
"inputStage": {
"stage": "IXSCAN",
"nReturned": 4,
"executionTimeMillisEstimate": 0,
"works": 5,
"advanced": 4,
"needTime": 0,
"needYield": 0,
"saveState": 0,
"restoreState": 0,
"isEOF": 1,
"keyPattern": {
"category": 1,
"published_year": 1
},
"indexName": "category_1_published_year_1",
"isMultiKey": false,
"multiKeyPaths": {
"category": [],
"published_year": []
},
"isUnique": false,
"isSparse": false,
"isPartial": false,
"indexVersion": 2,
"direction": "forward",
"indexBounds": {
"category": ["[\"Programming\", \"Programming\"]"],
"published_year": ["[2020, inf.0]"]
},
"keysExamined": 4,
"seeks": 1,
"dupsTested": 0,
"dupsDropped": 0
}
}
},
"explainVersion": "1",
"ok": 1,
"operationTime": {"$timestamp": {"t": 1782210552, "i": 2}},
"queryPlanner": {
"namespace": "test.books",
"parsedQuery": {
"$and": [
{
"category": {
"$eq": "Programming"
}
},
{
"published_year": {
"$gte": 2020
}
}
]
},
"indexFilterSet": false,
"queryHash": "92EDD004",
"planCacheShapeHash": "92EDD004",
"planCacheKey": "795A952C",
"optimizationTimeMillis": 0,
"maxIndexedOrSolutionsReached": false,
"maxIndexedAndSolutionsReached": false,
"maxScansToExplodeReached": false,
"prunedSimilarIndexes": false,
"winningPlan": {
"isCached": false,
"stage": "FETCH",
"inputStage": {
"stage": "IXSCAN",
"keyPattern": {
"category": 1,
"published_year": 1
},
"indexName": "category_1_published_year_1",
"isMultiKey": false,
"multiKeyPaths": {
"category": [],
"published_year": []
},
"isUnique": false,
"isSparse": false,
"isPartial": false,
"indexVersion": 2,
"direction": "forward",
"indexBounds": {
"category": ["[\"Programming\", \"Programming\"]"],
"published_year": ["[2020, inf.0]"]
}
}
},
"rejectedPlans": []
},
"queryShapeHash": "AA3078A59481B28A38775FA280FC4779BEA0E8E900AF63A4344B76A85859C985",
"serverInfo": {
"host": "ac-8kf2wgk-shard-00-01.okhogvl.mongodb.net",
"port": 27017,
"version": "8.0.26",
"gitVersion": "a2c24805265db119cc39f2f54e067b4294a4ddd2"
},
"serverParameters": {
"internalQueryFacetBufferSizeBytes": 104857600,
"internalQueryFacetMaxOutputDocSizeBytes": 104857600,
"internalLookupStageIntermediateDocumentMaxSizeBytes": 16793600,
"internalDocumentSourceGroupMaxMemoryBytes": 104857600,
"internalQueryMaxBlockingSortMemoryUsageBytes": 33554432,
"internalQueryProhibitBlockingMergeOnMongoS": 0,
"internalQueryMaxAddToSetBytes": 104857600,
"internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600,
"internalQueryFrameworkControl": "trySbeRestricted",
"internalQueryPlannerIgnoreIndexWithCollationForRegex": 1
}
}
]
```

**Before the index**, the query used a **COLLSCAN** (full collection scan): MongoDB examined **all 33 documents** to return **4** matching ones - most of the work was wasted, because only 4 of the 33 documents actually matched the filter.

**After the index**, the query switched to an **IXSCAN** (index scan): MongoDB examined only **4 documents** (and **4 index keys**) to return the same **4** results. The index let MongoDB jump straight to the matching range instead of reading the whole collection.

| Metric | Before | After |
| --- | --- | --- |
| Stage | COLLSCAN | IXSCAN |
| Documents examined | 33 | 4 |
| Keys examined | 0 | 4 |
| Documents returned | 4 | 4 |
| Execution time | 0 ms | 1 ms |

Index reduced the number of examined documents from **33 to 4**, changing the plan from a full collection scan to a targeted index scan. The execution time stayed near zero because the collection is very small, but on a large collection queries would be faster and more scalable.
