# AWS Deployment Guide

1. **S3 Bucket**
   - Create a bucket with public access.
   - Enable static website hosting.
   - Upload the `dist/` build output.

2. **CloudFront**
   - Create a CloudFront distribution pointing to your S3 bucket.
   - Configure custom domain with Route 53.
   - Attach SSL certificate.

3. **Lambda + API Gateway**
   - Create Lambda functions for visitor counter and contact form.
   - Attach to API Gateway endpoints.
   - Apply CORS and appropriate permissions.

4. **DynamoDB**
   - Create a table named `VisitorCount` with `id` as the primary key.

5. **SES (Simple Email Service)**
   - Verify your email.
   - Grant Lambda permission to send email via SES.

6. **Test Everything**
   - Website loads correctly via custom domain.
   - Resume downloads.
   - Visitor counter increments.
   - Contact form emails you.
