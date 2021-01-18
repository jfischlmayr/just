﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Models;

namespace backend.Migrations
{
    [DbContext(typeof(JustDataContext))]
    [Migration("20210118165449_Todo")]
    partial class Todo
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("backend.Models.Address", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4");

                    b.Property<string>("HouseNumber")
                        .HasMaxLength(10)
                        .HasColumnType("varchar(10) CHARACTER SET utf8mb4");

                    b.Property<string>("Street")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4");

                    b.Property<int>("ZIPCode")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("backend.Models.Appointment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("AppointmentName")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4");

                    b.Property<DateTime>("From")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Notes")
                        .HasMaxLength(1000)
                        .HasColumnType("varchar(1000) CHARACTER SET utf8mb4");

                    b.Property<DateTime>("To")
                        .HasColumnType("datetime(6)");

                    b.HasKey("ID");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("backend.Models.AppointmentMember", b =>
                {
                    b.Property<int>("AM_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AppointmentID")
                        .HasColumnType("int");

                    b.Property<int>("MemberID")
                        .HasColumnType("int");

                    b.HasKey("AM_ID");

                    b.ToTable("AppointmentMembers");
                });

            modelBuilder.Entity("backend.Models.Member", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100) CHARACTER SET utf8mb4");

                    b.Property<string>("Firstname")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100) CHARACTER SET utf8mb4");

                    b.Property<string>("Lastname")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100) CHARACTER SET utf8mb4");

                    b.Property<string>("Phone")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4");

                    b.HasKey("ID");

                    b.ToTable("Members");
                });

            modelBuilder.Entity("backend.Models.MemberRole", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("MemberID")
                        .HasColumnType("int");

                    b.Property<int>("ProjectID")
                        .HasColumnType("int");

                    b.Property<int>("RoleID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("MemberID");

                    b.ToTable("MemberRoles");
                });

            modelBuilder.Entity("backend.Models.Project", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("AddressID")
                        .HasColumnType("int");

                    b.Property<DateTime>("From")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Notes")
                        .HasMaxLength(1000)
                        .HasColumnType("varchar(1000) CHARACTER SET utf8mb4");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100) CHARACTER SET utf8mb4");

                    b.Property<DateTime>("To")
                        .HasColumnType("datetime(6)");

                    b.HasKey("ID");

                    b.HasIndex("AddressID");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("backend.Models.ProjectMember", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("MemberID")
                        .HasColumnType("int");

                    b.Property<int>("ProjectID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("ProjectMembers");
                });

            modelBuilder.Entity("backend.Models.Role", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4");

                    b.HasKey("ID");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("backend.Models.Task", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasMaxLength(1000)
                        .HasColumnType("varchar(1000) CHARACTER SET utf8mb4");

                    b.Property<int>("MemberID")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100) CHARACTER SET utf8mb4");

                    b.Property<int>("ProjectID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Tasks");
                });

            modelBuilder.Entity("backend.Models.ToDo", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasMaxLength(10000)
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4");

                    b.Property<DateTime>("To")
                        .HasColumnType("datetime(6)");

                    b.HasKey("ID");

                    b.ToTable("ToDos");
                });

            modelBuilder.Entity("backend.Models.MemberRole", b =>
                {
                    b.HasOne("backend.Models.Member", null)
                        .WithMany("Roles")
                        .HasForeignKey("MemberID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Models.Project", b =>
                {
                    b.HasOne("backend.Models.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressID");

                    b.Navigation("Address");
                });

            modelBuilder.Entity("backend.Models.Member", b =>
                {
                    b.Navigation("Roles");
                });
#pragma warning restore 612, 618
        }
    }
}
