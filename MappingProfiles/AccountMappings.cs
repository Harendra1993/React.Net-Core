using AutoMapper;
using App.App.DTOs;
using App.App.DTOs.User;
using App.Domain.Models;

namespace App.App.MappingProfiles
{
    public class AccountMappings : Profile
    {
        public AccountMappings()
        {
            // CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<User, UserCreateDTO>().ReverseMap();
            CreateMap<User, UserUpdateDTO>().ReverseMap();
            //CreateMap<UserRole, UserRoleDTO>().ReverseMap();
            CreateMap<Role, RoleDTO>().ReverseMap();
        }
    }
}