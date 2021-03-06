FROM ubuntu
RUN apt-get update
RUN apt-get install apache2 vim apache2-utils iputils-ping curl wget mysql-client -y
COPY /html /var/www/html
CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]
EXPOSE 80
