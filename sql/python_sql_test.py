import mysql.connector

cnx = mysql.connector.connect(user='root', password='Mysql_is_Mysql_88*',
                            database='sis')
mycursor = cnx.cursor() # this is how you execute commands
# sql_comm = "select stu_id, stu_first_name, stu_last_name\n "
sql_comm = "select *"
sql_join = "from students\n "
# sql_join = sql_join + "\n join students on att_stu_id = stu_id"
#trying to get the leftovers -> need to use OUTER JOIN
# specify RIGHT OUTER JOIN or LEFT OUTER JOIN,
# LEFT is the first table you are looking at (this is the one you call with FROM)
# RIGHT is the table you call using JOIN; generally people don't use right outer joins
# FULL OUTER JOIN takes the leftovers that don't get anything  from both tables
sql_outer_join = "left outer join attendance on stu_id =att_stu_id\n "
sql_outer_join = ""
sql_where = "where stu_id = \"btc001\"\n"
sql_limit = "limit 1"

sql_comm = sql_comm + sql_join + sql_outer_join + sql_where + sql_limit +";"



# print(sql_comm)

# insert_sql_comm = "insert into students "
# insert_sql_attrib = "(stu_id, stu_first_name, stu_last_name, stu_grade_level)\n"
# insert_sql_val = "values ('btc002', 'Bella', 'Ciccolo', '09')"
# insert_sql_comm = insert_sql_comm + insert_sql_attrib + insert_sql_val + ';'
mycursor.execute("use league;")
# insert_sql_comm = "insert into teams(tms_city, tms_name) value ('Abington', 'Albatross');"
# print(insert_sql_comm)
# mycursor.execute(insert_sql_comm)
# insert_sql_comm = "insert into teams(tms_city, tms_name) value ('Salem', 'Snails');"
# print(insert_sql_comm)
# mycursor.execute(insert_sql_comm)
# insert_sql_comm = "insert into teams(tms_city, tms_name) value ('Hanson', 'Hangovers');"
# print(insert_sql_comm)
# mycursor.execute(insert_sql_comm)
# insert_sql_comm = "insert into teams(tms_city, tms_name) value ('Pembroke', 'Pickles');"
# print(insert_sql_comm)
# mycursor.execute(insert_sql_comm)
# cnx.commit() #MAKE SURE YOU RUN THIS TO COMMMIT CHANGES FROM COMMIT

# insert_sql_comm = "select * from teams;"
# print(insert_sql_comm)
# mycursor.execute(insert_sql_comm)

insert_sql_comm = "insert into players(pla_dob, pla_first_name, pla_last_name, pla_tms_id, pla_position, pla_jersey_number) value("
players[]
for i in range(365):
    


for i in range(len(players)):

myresult = mycursor.fetchall()
for r in myresult:
    print(r)

cnx.close()