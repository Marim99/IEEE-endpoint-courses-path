# IEEE-endpoint-courses-path
# courses path

This is for the IEEE Backend task.

## Courses

### 1. Endpoint

```"/api/courses"```

```"/api/courses/courseId"```

```"/api/courses/:courseId"```

### 2. Method 

* GET 
* POST
* DELETE
### 3. Body 
```
{
name: string
description: string
couresImg: string
contant: string
perquisites: string
instructor: string
courseLength: number
fees: number
}
```
### 4. Permissions 

#### 4.1 Read 

all (user and admin)

#### 4.2 Write 

Admin only 
