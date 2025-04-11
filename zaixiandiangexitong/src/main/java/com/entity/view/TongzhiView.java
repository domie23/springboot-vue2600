package com.entity.view;

import com.entity.TongzhiEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;

/**
 * 消息通知
 * 后端返回视图实体辅助类
 * （通常后端关联的表或者自定义的字段需要返回使用）
 */
@TableName("tongzhi")
public class TongzhiView extends TongzhiEntity implements Serializable {
    private static final long serialVersionUID = 1L;

		/**
		* 通知类型的值
		*/
		private String tongzhiValue;



		//级联表 yonghu
			/**
			* 用户姓名
			*/
			private String yonghuName;
			/**
			* 用户手机号
			*/
			private String yonghuPhone;
			/**
			* 用户身份证号
			*/
			private String yonghuIdNumber;
			/**
			* 用户头像
			*/
			private String yonghuPhoto;
			/**
			* 是否使用
			*/
			private Integer shiyongTypes;
				/**
				* 是否使用的值
				*/
				private String shiyongValue;
			/**
			* 电子邮箱
			*/
			private String yonghuEmail;

	public TongzhiView() {

	}

	public TongzhiView(TongzhiEntity tongzhiEntity) {
		try {
			BeanUtils.copyProperties(this, tongzhiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



			/**
			* 获取： 通知类型的值
			*/
			public String getTongzhiValue() {
				return tongzhiValue;
			}
			/**
			* 设置： 通知类型的值
			*/
			public void setTongzhiValue(String tongzhiValue) {
				this.tongzhiValue = tongzhiValue;
			}
















				//级联表的get和set yonghu
					/**
					* 获取： 用户姓名
					*/
					public String getYonghuName() {
						return yonghuName;
					}
					/**
					* 设置： 用户姓名
					*/
					public void setYonghuName(String yonghuName) {
						this.yonghuName = yonghuName;
					}
					/**
					* 获取： 用户手机号
					*/
					public String getYonghuPhone() {
						return yonghuPhone;
					}
					/**
					* 设置： 用户手机号
					*/
					public void setYonghuPhone(String yonghuPhone) {
						this.yonghuPhone = yonghuPhone;
					}
					/**
					* 获取： 用户身份证号
					*/
					public String getYonghuIdNumber() {
						return yonghuIdNumber;
					}
					/**
					* 设置： 用户身份证号
					*/
					public void setYonghuIdNumber(String yonghuIdNumber) {
						this.yonghuIdNumber = yonghuIdNumber;
					}
					/**
					* 获取： 用户头像
					*/
					public String getYonghuPhoto() {
						return yonghuPhoto;
					}
					/**
					* 设置： 用户头像
					*/
					public void setYonghuPhoto(String yonghuPhoto) {
						this.yonghuPhoto = yonghuPhoto;
					}
					/**
					* 获取： 是否使用
					*/
					public Integer getShiyongTypes() {
						return shiyongTypes;
					}
					/**
					* 设置： 是否使用
					*/
					public void setShiyongTypes(Integer shiyongTypes) {
						this.shiyongTypes = shiyongTypes;
					}


						/**
						* 获取： 是否使用的值
						*/
						public String getShiyongValue() {
							return shiyongValue;
						}
						/**
						* 设置： 是否使用的值
						*/
						public void setShiyongValue(String shiyongValue) {
							this.shiyongValue = shiyongValue;
						}
					/**
					* 获取： 电子邮箱
					*/
					public String getYonghuEmail() {
						return yonghuEmail;
					}
					/**
					* 设置： 电子邮箱
					*/
					public void setYonghuEmail(String yonghuEmail) {
						this.yonghuEmail = yonghuEmail;
					}


}
