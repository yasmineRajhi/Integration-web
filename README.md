WEB


https://youtube-project.tk/

    npm install

    
    npm audit fix

    npm update

    npm start


====================================

set HTTPS=true&&set SSL_CRT_FILE=PATH&&set SSL_KEY_FILE=PATH&&set PORT=443&&set HOST=dns

====================================


    <IfModule mod_rewrite.c>
    RewriteEngine On

    # Redirect /xampp folder to https
    RewriteCond %{HTTPS} !=on
    RewriteCond %{REQUEST_URI} xampp
    RewriteRule ^(.*) https://%{SERVER_NAME}$1 [R,L]

    # Redirect /phpMyAdmin folder to https
    RewriteCond %{HTTPS} !=on
    RewriteCond %{REQUEST_URI} phpmyadmin
    RewriteRule ^(.*) https://%{SERVER_NAME}$1 [R,L]

    # Redirect /security folder to https
    RewriteCond %{HTTPS} !=on
    RewriteCond %{REQUEST_URI} security
    RewriteRule ^(.*) https://%{SERVER_NAME}$1 [R,L]

    # Redirect /webalizer folder to https
    RewriteCond %{HTTPS} !=on
    RewriteCond %{REQUEST_URI} webalizer
    RewriteRule ^(.*) https://%{SERVER_NAME}$1 [R,L]
    </IfModule>

